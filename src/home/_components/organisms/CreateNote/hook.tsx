import React from 'react';
import { useDispatch } from 'react-redux';
import { ReduxNotesType } from '../../../../core-utils/constants';
import useNoteDetails from '../../../../core-utils/hooks/useNoteDetails';
import { addTask } from '../../../../core-utils/redux/actions';
import { INoteFooterItem } from '../../molecules/NoteFooter';
import { v4 as uuid } from 'uuid';
import { NoteFooterActions } from '../../../_utils/constants';
import { getCreateNoteActions } from '../../../_utils/helpers';

const useCreateNote = () => {
  const {
    note,
    resetStates: resetNoteDetails,
    handleNoteChange,
    handleTitleChange,
    title,
  } = useNoteDetails();

  const [noteActions, setNoteActions] = React.useState<INoteFooterItem[]>(
    getCreateNoteActions,
  );

  const dispatch = useDispatch();

  const resetStates = () => {
    resetNoteDetails();
    setNoteActions(getCreateNoteActions);
  };

  const handleNoteActionClick = (actionLabel: string) => {
    if (actionLabel === NoteFooterActions.Close) {
      resetStates();
      if (title.trim() === '' && note.trim() === '') return;
      dispatch(
        addTask({
          nodeType: noteActions[0].isActive
            ? ReduxNotesType.ARCHIVE
            : ReduxNotesType.ACTIVE,
          data: {
            body: note,
            title: title,
            id: uuid(),
            pinned: noteActions[1].isActive,
          },
        }),
      );
      return;
    }
    setNoteActions((noteActions) => {
      return noteActions.map((noteAction) => {
        if (noteAction.label === actionLabel) {
          return { ...noteAction, isActive: !noteAction.isActive };
        } else {
          return { ...noteAction };
        }
      });
    });
  };

  return {
    title,
    note,
    handleNoteChange,
    handleTitleChange,
    noteActions,
    handleNoteActionClick,
  };
};

export default useCreateNote;

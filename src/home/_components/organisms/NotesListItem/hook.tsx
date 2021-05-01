import React from 'react';
import { useDispatch } from 'react-redux';
import { ReduxNotesType } from '../../../../core-utils/constants';
import { getUrlWithSearchParams } from '../../../../core-utils/helpers';
import useLocationSearchParams from '../../../../core-utils/hooks/useLocationSearchParams';
import useModal from '../../../../core-utils/hooks/useModal';
import useNoteDetails from '../../../../core-utils/hooks/useNoteDetails';
import { updateNote } from '../../../../core-utils/redux/actions';
import { NoteFooterActions } from '../../../_utils/constants';
import {
  getEditNoteActions,
  getReadonlyNoteActions,
  handleNotesAction,
} from '../../../_utils/helpers';
import { INoteFooterItem } from '../../molecules/NoteFooter';

const useNotesListItem = (
  id = '',
  titleProp = '',
  noteProp = '',
  pinned = false,
  archived = false,
) => {
  const { title, note, handleNoteChange, handleTitleChange } = useNoteDetails(
    titleProp,
    noteProp,
  );
  const [readOnlyNoteActions, setReadonlyNoteActions] = React.useState<
    INoteFooterItem[]
  >(() => getReadonlyNoteActions(archived, pinned));
  const [editNoteActions, setEditNoteActions] = React.useState<
    INoteFooterItem[]
  >(() => getEditNoteActions(archived, pinned));

  const modal = useModal();
  const {
    location: { pathname },
    history,
    searchParams: { noteId: noteParam, ...restSearchParams },
  } = useLocationSearchParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    setReadonlyNoteActions(getReadonlyNoteActions(archived, pinned));
    setEditNoteActions(getEditNoteActions(archived, pinned));
  }, [archived, pinned]);

  React.useEffect(() => {
    if (id === noteParam) {
      modal.handleModalOpen();
    } else {
      modal.handleModalClose();
    }
  }, [id, noteParam]);

  const handleCardClick = () => {
    history.push(
      getUrlWithSearchParams(pathname, { ...restSearchParams, noteId: id }),
    );
  };

  const handleModalClose = () => {
    history.push(getUrlWithSearchParams(pathname, { ...restSearchParams }));
  };

  const handleNoteActionClick = (actionLabel: string) => {
    if (actionLabel === NoteFooterActions.Close) {
      dispatch(
        updateNote({
          nodeType: archived ? ReduxNotesType.ARCHIVE : ReduxNotesType.ACTIVE,
          data: {
            body: note,
            title,
            id,
          },
        }),
      );
      handleModalClose();
    } else {
      handleNotesAction(dispatch, actionLabel, id, archived);
    }
  };

  return {
    title,
    note,
    readOnlyNoteActions,
    editNoteActions,
    handleNoteActionClick,
    handleNoteChange,
    handleTitleChange,
    handleCardClick,
    modal: { ...modal, handleModalClose },
  };
};

export default useNotesListItem;

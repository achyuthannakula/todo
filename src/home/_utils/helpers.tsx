import React from 'react';
import { Dispatch } from 'redux';
import { ReduxNotesType, RouteToNotesType } from '../../core-utils/constants';
import {
  activateTask,
  archiveTask,
  pinNote,
  removeNote,
  unPinNote,
} from '../../core-utils/redux/actions';
import { NoteState } from '../../core-utils/redux/types';
import ArchiveIcon from '../_components/atoms/ArchiveIcon';
import PinIcon from '../_components/atoms/PinIcon';
import UnArchiveIcon from '../_components/atoms/UnArchiveIcon';
import UnPinIcon from '../_components/atoms/UnPinIcon';
import { INoteFooterItem } from '../_components/molecules/NoteFooter';
import { NoteFooterActions } from './constants';

export const getCreateNoteActions = (): INoteFooterItem[] => {
  return [
    {
      label: NoteFooterActions.Archive,
      icon: <ArchiveIcon />,
      isActive: false,
      divider: false,
      type: 'icon',
    },
    {
      label: NoteFooterActions.Pin,
      icon: <PinIcon />,
      isActive: false,
      divider: true,
      type: 'icon',
    },
    {
      label: NoteFooterActions.Close,
      isActive: false,
      divider: false,
      type: 'text',
    },
  ];
};

export const getReadonlyNoteActions = (
  archived = false,
  pinned = false,
): INoteFooterItem[] => {
  return [
    {
      label: archived ? NoteFooterActions.Activate : NoteFooterActions.Archive,
      icon: archived ? <UnArchiveIcon /> : <ArchiveIcon />,
      isActive: false,
      divider: false,
      type: 'icon',
    },
    {
      label: pinned ? NoteFooterActions.Unpin : NoteFooterActions.Pin,
      icon: pinned ? <UnPinIcon /> : <PinIcon />,
      isActive: false,
      divider: true,
      type: 'icon',
    },
    {
      label: NoteFooterActions.Delete,
      isActive: false,
      divider: false,
      type: 'text',
    },
  ];
};

export const getEditNoteActions = (
  archived = false,
  pinned = false,
): INoteFooterItem[] => {
  return [
    {
      label: archived ? NoteFooterActions.Activate : NoteFooterActions.Archive,
      icon: archived ? <UnArchiveIcon /> : <ArchiveIcon />,
      isActive: false,
      divider: false,
      type: 'icon',
    },
    {
      label: pinned ? NoteFooterActions.Unpin : NoteFooterActions.Pin,
      icon: pinned ? <UnPinIcon /> : <PinIcon />,
      isActive: false,
      divider: true,
      type: 'icon',
    },
    {
      label: NoteFooterActions.Delete,
      isActive: false,
      divider: false,
      type: 'text',
    },
    {
      label: NoteFooterActions.Close,
      isActive: false,
      divider: false,
      type: 'text',
    },
  ];
};

export const getReduxKeyFromRouteKey = (routeKey) => {
  return (routeKey === RouteToNotesType['archived-notes']
    ? ReduxNotesType.ARCHIVE
    : ReduxNotesType.ACTIVE
  ).toLowerCase();
};

export const searchStringByArray = (str: string, searchKeys: string[]) => {
  return searchKeys.some((s) => str.toLowerCase().includes(s));
};

export const filterNoteStateBySearch = (notes: NoteState[], search: string) => {
  const searchKeys = search.trim().toLowerCase().split(/[\s]+/);
  return notes.filter(
    (note) =>
      searchStringByArray(note.title, searchKeys) ||
      searchStringByArray(note.body, searchKeys),
  );
};

export const handleNotesAction = (
  dispatch: Dispatch,
  action: string,
  id: string,
  archived: boolean,
) => {
  if (action === NoteFooterActions.Archive) {
    dispatch(
      archiveTask({
        id,
      }),
    );
  } else if (action === NoteFooterActions.Activate) {
    dispatch(
      activateTask({
        id,
      }),
    );
  } else if (action === NoteFooterActions.Pin) {
    dispatch(
      pinNote({
        nodeType: archived ? ReduxNotesType.ARCHIVE : ReduxNotesType.ACTIVE,
        id,
      }),
    );
  } else if (action === NoteFooterActions.Unpin) {
    dispatch(
      unPinNote({
        nodeType: archived ? ReduxNotesType.ARCHIVE : ReduxNotesType.ACTIVE,
        id,
      }),
    );
  } else if (action === NoteFooterActions.Delete) {
    dispatch(
      removeNote({
        nodeType: archived ? ReduxNotesType.ARCHIVE : ReduxNotesType.ACTIVE,
        id,
      }),
    );
  }
};

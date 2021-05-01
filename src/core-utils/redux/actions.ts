import {
  ADD_NOTE,
  ACTIVATE_NOTE,
  ARCHIVE_NOTE,
  PIN_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
  ActivateNoteAction,
  AddNoteAction,
  ArchiveNoteAction,
  PinNoteAction,
  RemoveNoteAction,
  UpdateNoteAction,
  UpdateNightModeAction,
  UPDATE_NIGHT_MODE,
} from './types';

export function addTask(info: Omit<AddNoteAction, 'type'>): AddNoteAction {
  return {
    type: ADD_NOTE,
    ...info,
  };
}

export function updateNote(
  info: Omit<UpdateNoteAction, 'type'>,
): UpdateNoteAction {
  return {
    type: UPDATE_NOTE,
    ...info,
  };
}

export function removeNote(
  info: Omit<RemoveNoteAction, 'type'>,
): RemoveNoteAction {
  return {
    type: REMOVE_NOTE,
    ...info,
  };
}

export function pinNote(
  info: Omit<Omit<PinNoteAction, 'type'>, 'pinned'>,
): PinNoteAction {
  return {
    type: PIN_NOTE,
    ...info,
    pinned: true,
  };
}

export function unPinNote(
  info: Omit<Omit<PinNoteAction, 'type'>, 'pinned'>,
): PinNoteAction {
  return {
    type: PIN_NOTE,
    ...info,
    pinned: false,
  };
}

export function archiveTask(
  info: Omit<ArchiveNoteAction, 'type'>,
): ArchiveNoteAction {
  return {
    type: ARCHIVE_NOTE,
    ...info,
  };
}

export function activateTask(
  info: Omit<ActivateNoteAction, 'type'>,
): ActivateNoteAction {
  return {
    type: ACTIVATE_NOTE,
    ...info,
  };
}

export function updateNightMode(nightMode: boolean): UpdateNightModeAction {
  return {
    type: UPDATE_NIGHT_MODE,
    nightMode,
  };
}

import { ReduxNotesType } from '../constants';

export const ADD_NOTE = 'ADD NOTE';
export const REMOVE_NOTE = 'REMOVE NOTE';
export const UPDATE_NOTE = 'UPDATE NOTE';
export const PIN_NOTE = 'PIN NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE NOTE';
export const ACTIVATE_NOTE = 'ACTIVATE NOTE';

export const UPDATE_NIGHT_MODE = 'UPDATE NIGHT MODE';

export interface NoteState {
  id: string;
  title: string;
  body: string;
  pinned?: boolean;
}

export interface NotesState {
  archive: NoteState[];
  active: NoteState[];
  nightMode: boolean;
}

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  data: NoteState;
  nodeType: ReduxNotesType.ACTIVE | ReduxNotesType.ARCHIVE;
}

export interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  data: NoteState;
  nodeType: ReduxNotesType.ACTIVE | ReduxNotesType.ARCHIVE;
}

export interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  id: string;
  nodeType: ReduxNotesType.ACTIVE | ReduxNotesType.ARCHIVE;
}

export interface PinNoteAction {
  type: typeof PIN_NOTE;
  id: string;
  nodeType: ReduxNotesType.ACTIVE | ReduxNotesType.ARCHIVE;
  pinned: boolean;
}

export interface ArchiveNoteAction {
  type: typeof ARCHIVE_NOTE;
  id: string;
}

export interface ActivateNoteAction {
  type: typeof ACTIVATE_NOTE;
  id: string;
}

export interface UpdateNightModeAction {
  type: typeof UPDATE_NIGHT_MODE;
  nightMode: boolean;
}

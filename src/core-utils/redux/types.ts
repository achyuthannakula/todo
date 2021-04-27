export const ADD_NOTE = 'ADD NOTE';
export const REMOVE_NOTE = 'REMOVE NOTE';
export const UPDATE_NOTE = 'UPDATE NOTE';
export const PIN_NOTE = 'PIN NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE NOTE';
export const ACTIVATE_NOTE = 'ACTIVATE NOTE';

export const UPDATE_SEARCH = 'UPDATE SEARCH';

export interface NoteState {
  id: string;
  title: string;
  body: string;
  pinned?: boolean;
}

export interface NotesState {
  archive: NoteState[];
  active: NoteState[];
  search: string;
}

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  data: NoteState;
  nodeType: 'ACTIVE' | 'ARCHIVE';
}

export interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  data: NoteState;
  nodeType: 'ACTIVE' | 'ARCHIVE';
}

export interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  data: string;
  nodeType: 'ACTIVE' | 'ARCHIVE';
}

export interface PinNoteAction {
  type: typeof PIN_NOTE;
  data: string;
  nodeType: 'ACTIVE' | 'ARCHIVE';
  pinned: boolean;
}

export interface ArchiveNoteAction {
  type: typeof ARCHIVE_NOTE;
  data: string;
}

export interface ActivateNoteAction {
  type: typeof ACTIVATE_NOTE;
  data: string;
}

export interface UpdateSearchAction {
  type: typeof UPDATE_SEARCH;
  data: string;
}

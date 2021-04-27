import {
  NotesState,
  ADD_NOTE,
  ACTIVATE_NOTE,
  ARCHIVE_NOTE,
  PIN_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
  UPDATE_SEARCH,
  ActivateNoteAction,
  AddNoteAction,
  ArchiveNoteAction,
  PinNoteAction,
  RemoveNoteAction,
  UpdateNoteAction,
  UpdateSearchAction,
} from './types';

export const REDUX_INITIAL_STATE: NotesState = {
  active: [],
  archive: [],
  search: '',
};

export function rootReducer(
  state = REDUX_INITIAL_STATE,
  action:
    | ActivateNoteAction
    | AddNoteAction
    | ArchiveNoteAction
    | PinNoteAction
    | RemoveNoteAction
    | UpdateNoteAction
    | UpdateSearchAction,
): NotesState {
  if (action.type === ADD_NOTE) {
    return {
      ...state,
      [action.nodeType.toLowerCase()]: [
        { ...action.data },
        ...state[action.nodeType],
      ],
    };
  } else if (action.type === ARCHIVE_NOTE) {
    const nodeIndex = state.active.findIndex((n) => n.id === action.data);
    if (nodeIndex === -1) return state;
    // todo: should we ned to unpin
    return {
      ...state,
      archive: [...state.archive, state.active[nodeIndex]],
      active: state.active.splice(nodeIndex, 1),
    };
  } else if (action.type === ACTIVATE_NOTE) {
    const nodeIndex = state.archive.findIndex((n) => n.id === action.data);
    if (nodeIndex === -1) return state;
    // todo: should we ned to unpin
    return {
      ...state,
      active: [...state.active, state.archive[nodeIndex]],
      archive: state.archive.splice(nodeIndex, 1),
    };
  } else if (action.type === UPDATE_NOTE) {
    const key = action.nodeType.toLowerCase();
    return {
      ...state,
      [key]: state[key].map((n) => {
        if (n.id === action.data.id) {
          return {
            ...action.data,
          };
        }
        return n;
      }),
    };
  } else if (action.type === PIN_NOTE) {
    const key = action.nodeType.toLowerCase();
    return {
      ...state,
      [key]: state[key].map((n) => {
        if (n.id === action.data) {
          return {
            ...n,
            pinned: action.pinned,
          };
        }
        return n;
      }),
    };
  } else if (action.type === REMOVE_NOTE) {
    const key = action.nodeType.toLowerCase();
    return {
      ...state,
      [key]: state[key].filter((n) => n.id !== action.data),
    };
  } else if (action.type === UPDATE_SEARCH) {
    return {
      ...state,
      search: action.data,
    };
  }
  return state;
}

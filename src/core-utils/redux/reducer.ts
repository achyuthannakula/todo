import {
  NotesState,
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
  UPDATE_NIGHT_MODE,
  UpdateNightModeAction,
} from './types';

// tslint:disable: max-union-size : cognitive-complexity
export const REDUX_INITIAL_STATE: NotesState = {
  active: [],
  archive: [],
  nightMode: false,
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
    | UpdateNightModeAction,
): NotesState {
  if (action.type === ADD_NOTE) {
    return {
      ...state,
      [action.nodeType.toLowerCase()]: [
        { ...action.data },
        ...state[action.nodeType.toLowerCase()],
      ],
    };
  } else if (action.type === ARCHIVE_NOTE) {
    const nodeIndex = state.active.findIndex((n) => n.id === action.id);
    if (nodeIndex === -1) return state;
    const active = [...state.active];
    active.splice(nodeIndex, 1);
    return {
      ...state,
      archive: [...state.archive, state.active[nodeIndex]],
      active: active,
    };
  } else if (action.type === ACTIVATE_NOTE) {
    const nodeIndex = state.archive.findIndex((n) => n.id === action.id);
    if (nodeIndex === -1) return state;
    const archive = [...state.archive];
    archive.splice(nodeIndex, 1);
    return {
      ...state,
      active: [...state.active, state.archive[nodeIndex]],
      archive: archive,
    };
  } else if (action.type === UPDATE_NOTE) {
    const key = action.nodeType.toLowerCase();
    return {
      ...state,
      [key]: state[key].map((n) => {
        if (n.id === action.data.id) {
          return {
            ...n,
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
        if (n.id === action.id) {
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
      [key]: state[key].filter((n) => n.id !== action.id),
    };
  } else if (action.type === UPDATE_NIGHT_MODE) {
    return {
      ...state,
      nightMode: action.nightMode,
    };
  }
  return state;
}

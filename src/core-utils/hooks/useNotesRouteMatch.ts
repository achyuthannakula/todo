import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { getReduxKeyFromRouteKey } from '../../home/_utils/helpers';
import { RouteToNotesType } from '../constants';
import { NotesState, NoteState } from '../redux/types';
import QueryString from 'qs';

const useNotesRouteMatch = () => {
  const match = useRouteMatch<{ route: string }>('/:route');
  const { search: locationSearch } = useLocation();
  const { search: searchParam } = QueryString.parse(locationSearch, {
    ignoreQueryPrefix: true,
  });

  const notesType =
    RouteToNotesType[match?.params.route || ''] ||
    RouteToNotesType['active-notes'];

  const notes: NoteState[] = useSelector((store: NotesState) => {
    return store[getReduxKeyFromRouteKey(notesType)];
  });

  const reduxStore: NotesState = useSelector((store: NotesState) => {
    return store;
  });

  return {
    activeRoute: notesType,
    notes,
    reduxStore,
    search: (typeof searchParam === 'string' && searchParam) || '',
  };
};

export default useNotesRouteMatch;

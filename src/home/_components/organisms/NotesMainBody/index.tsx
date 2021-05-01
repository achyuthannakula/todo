import React from 'react';
import {
  ReduxNotesType,
  RouteToNotesType,
} from '../../../../core-utils/constants';
import useNotesRouteMatch from '../../../../core-utils/hooks/useNotesRouteMatch';
import CreateNote from '../CreateNote';
import NotesList from '../NotesList';
import NotesListNode from '../NotesListNode';
import SearchNotesList from '../SearchNotesList';
import './index.css';

const NotesMainBody = () => {
  const { activeRoute, reduxStore, notes, search } = useNotesRouteMatch();

  return (
    <main className="main-body">
      <div className="flex flex-column">
        {!search && (
          <>
            {activeRoute != RouteToNotesType['archived-notes'] && (
              <CreateNote />
            )}
            <NotesList
              noteType={
                activeRoute === RouteToNotesType['archived-notes']
                  ? ReduxNotesType.ARCHIVE
                  : ReduxNotesType.ACTIVE
              }
              notes={notes}
            />
          </>
        )}
        {search && (
          <SearchNotesList
            active={reduxStore.active}
            archive={reduxStore.archive}
            search={search}
          />
        )}
      </div>
    </main>
  );
};

export default NotesMainBody;

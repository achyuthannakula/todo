import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxNotesType } from '../../../../core-utils/constants';
import { NotesState, NoteState } from '../../../../core-utils/redux/types';
import NotesListItem from '../NotesListItem';
import './index.css';

export interface INotesList {
  notesType: ReduxNotesType;
  notes: NoteState[];
  title?: string;
  emptyPlaceholder?: string;
}

const NotesListNode: React.FC<INotesList> = ({
  notesType = ReduxNotesType.ACTIVE,
  notes,
  title,
  emptyPlaceholder,
}) => {
  return (
    <>
      {notes.length > 0 ? (
        <>
          {title && <p className="paragraph2">{title}</p>}
          <div className="flex flex-wrap notes-list ">
            {notes.map((note) => (
              <NotesListItem
                id={note.id}
                title={note.title}
                note={note.body}
                key={note.id}
                pinned={note.pinned}
                archived={notesType === ReduxNotesType.ARCHIVE}
              />
            ))}
          </div>
        </>
      ) : (
        emptyPlaceholder && (
          <p className="paragraph2 flex flex-justify-center">
            {title} - {emptyPlaceholder}
          </p>
        )
      )}
    </>
  );
};

export default NotesListNode;

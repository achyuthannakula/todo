import React from 'react';
import { ReduxNotesType } from '../../../../core-utils/constants';
import { NoteState } from '../../../../core-utils/redux/types';
import NotesListNode from '../NotesListNode';

export interface INotesList {
  notes: NoteState[];
  noteType: ReduxNotesType;
}
const NotesList: React.FC<INotesList> = ({ notes, noteType }) => {
  const [filteredNotes, setFilteredNotes] = React.useState<{
    pinned: NoteState[];
    normal: NoteState[];
  }>({ pinned: [], normal: [] });

  React.useEffect(() => {
    setFilteredNotes({
      pinned: notes.filter((note) => note.pinned),
      normal: notes.filter((note) => !note.pinned),
    });
  }, [notes, noteType]);

  return (
    <>
      {filteredNotes.pinned.length === 0 && filteredNotes.normal.length == 0 ? (
        <p className="paragraph2 text-align-center">
          Your {noteType === ReduxNotesType.ARCHIVE ? 'archived' : 'active'}{' '}
          notes appear here
        </p>
      ) : (
        <>
          <NotesListNode
            title={'Pinned'}
            notesType={noteType}
            notes={filteredNotes.pinned}
          />
          <NotesListNode
            title={filteredNotes.pinned.length > 0 ? 'Others' : ''}
            notesType={noteType}
            notes={filteredNotes.normal}
          />
        </>
      )}
    </>
  );
};

export default NotesList;

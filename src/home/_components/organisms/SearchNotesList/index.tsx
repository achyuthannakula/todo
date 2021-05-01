import React from 'react';
import { ReduxNotesType } from '../../../../core-utils/constants';
import { NoteState } from '../../../../core-utils/redux/types';
import { filterNoteStateBySearch } from '../../../_utils/helpers';
import NotesListNode from '../NotesListNode';

export interface ISearchNotesList {
  active: NoteState[];
  archive: NoteState[];
  search: string;
}
const SearchNotesList: React.FC<ISearchNotesList> = ({
  active,
  archive,
  search,
}) => {
  const [filteredNotes, setFilteredNotes] = React.useState<{
    active: NoteState[];
    archive: NoteState[];
  }>({ active: [], archive: [] });

  React.useEffect(() => {
    setFilteredNotes({
      active: filterNoteStateBySearch(active, search),
      archive: filterNoteStateBySearch(archive, search),
    });
  }, [search, active, archive]);

  return (
    <>
      {filteredNotes.active.length === 0 &&
      filteredNotes.archive.length == 0 ? (
        <p className="paragraph2 text-align-center">No results found.</p>
      ) : (
        <>
          <NotesListNode
            title={'Active'}
            notesType={ReduxNotesType.ACTIVE}
            notes={filteredNotes.active}
          />
          <NotesListNode
            title={'Archived'}
            notesType={ReduxNotesType.ARCHIVE}
            notes={filteredNotes.archive}
          />
        </>
      )}
    </>
  );
};

export default SearchNotesList;

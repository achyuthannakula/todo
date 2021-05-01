import React from 'react';
import NoteEditCard from '../../molecules/NoteEditCard';
import useCreateNote from './hook';
import './index.css';

const CreateNote = () => {
  const {
    note,
    noteActions,
    title,
    handleNoteChange,
    handleTitleChange,
    handleNoteActionClick,
  } = useCreateNote();

  return (
    <div className="create-note-card" tabIndex={0}>
      <NoteEditCard
        note={note}
        title={title}
        handleNoteChange={handleNoteChange}
        handleTitleChange={handleTitleChange}
        noteActions={noteActions}
        onActionItemClick={handleNoteActionClick}
      />
    </div>
  );
};

export default CreateNote;

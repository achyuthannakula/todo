import React from 'react';
import useNotesListItem from './hook';
import NoteEditCard from '../../molecules/NoteEditCard';
import './index.css';
import Modal from '../../molecules/Modal';

const NotesListItem = ({
  id,
  title: titleProp,
  note: noteProp,
  pinned,
  archived,
  className = '',
}) => {
  const {
    title,
    note,
    editNoteActions,
    readOnlyNoteActions,
    modal,
    handleNoteActionClick,
    handleNoteChange,
    handleTitleChange,
    handleCardClick,
  } = useNotesListItem(id, titleProp, noteProp, pinned, archived);

  return (
    <div className={`notes-list-item ${className}`}>
      <NoteEditCard
        note={noteProp}
        title={titleProp}
        noteActions={readOnlyNoteActions}
        readOnly={true}
        onActionItemClick={handleNoteActionClick}
        onClick={handleCardClick}
      />
      <Modal open={modal.isModalOpen}>
        <NoteEditCard
          note={note}
          title={title}
          noteActions={editNoteActions}
          onActionItemClick={handleNoteActionClick}
          handleNoteChange={handleNoteChange}
          handleTitleChange={handleTitleChange}
          className="note-edit-modal"
        />
      </Modal>
    </div>
  );
};

export default NotesListItem;

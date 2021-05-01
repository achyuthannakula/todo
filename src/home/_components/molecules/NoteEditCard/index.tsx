import React from 'react';
import { EMPTY_FUNCTION } from '../../../../core-utils/constants';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import NoteFooter, { INoteFooterItem } from '../NoteFooter';
import './index.css';

export interface INoteEditCard {
  title: string;
  handleTitleChange?: Function;
  note: string;
  handleNoteChange?: Function;
  noteActions: INoteFooterItem[];
  readOnly?: boolean;
  onActionItemClick: Function;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const NoteEditCard: React.FC<INoteEditCard> = ({
  title,
  handleTitleChange,
  note,
  handleNoteChange,
  noteActions,
  readOnly = false,
  onActionItemClick,
  className = '',
  onClick,
}) => {
  return (
    <div className={`edit-note-card ${className}`} tabIndex={0}>
      {(readOnly && !title) || (
        <Input
          className="edit-note-title paragraph"
          placeholder="Title"
          fullWidth
          onChange={handleTitleChange}
          value={title}
          readOnly={readOnly}
          onClick={onClick}
        />
      )}
      <TextArea
        className="paragraph2"
        value={note}
        placeholder="Take a note..."
        fullWidth
        onChange={handleNoteChange}
        readOnly={readOnly}
        onClick={onClick}
      />
      <NoteFooter
        items={noteActions}
        className="edit-note-actions"
        onItemClick={onActionItemClick}
      />
    </div>
  );
};

export default NoteEditCard;

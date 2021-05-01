import React from 'react';

const useNoteDetails = (titleProp = '', noteProp = '') => {
  const [title, setTitle] = React.useState('');
  const [note, setNote] = React.useState('');

  React.useEffect(() => {
    setTitle(titleProp);
    setNote(noteProp);
  }, [titleProp, noteProp]);

  const handleNoteChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    setNote(event.target.value);
  };

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setTitle(event.target.value);
  };

  const resetStates = () => {
    setNote('');
    setTitle('');
  };

  return {
    title,
    setTitle,
    note,
    setNote,
    resetStates,
    handleNoteChange,
    handleTitleChange,
  };
};

export default useNoteDetails;

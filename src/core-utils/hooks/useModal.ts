import React from 'react';

const useModal = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isModalOpen: isOpen,
    handleModalOpen: handleOpen,
    handleModalClose: handleClose,
  };
};

export default useModal;

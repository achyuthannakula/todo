import React from 'react';
import HamburgerIcon from '../HamburgerIcon';
import IconButton from '../IconButton';

const SidebarToggleButton = ({ onClick }) => {
  return (
    <IconButton className="sidebar-toggle-icon" onClick={onClick}>
      <HamburgerIcon width="1rem" height="1rem" />
    </IconButton>
  );
};

export default SidebarToggleButton;

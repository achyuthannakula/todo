import React from 'react';
import HamburgerIcon from '../HamburgerIcon';
import './index.css';

const SidebarToggleButton = ({ onClick }) => {
  return (
    <div className="sidebar-toggle-icon" onClick={onClick} tabIndex={0}>
      <HamburgerIcon />
    </div>
  );
};

export default SidebarToggleButton;

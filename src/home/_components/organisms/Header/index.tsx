import React from 'react';
import SidebarToggleButton from '../../atoms/SidebarToggleButton';
import GlobalSearch from '../GlobalSearch';
import NightModeSwitch from '../NightModeSwitch';
import './index.css';

const Header = ({ onNavMenuClick, title }) => {
  return (
    <header className="header">
      <SidebarToggleButton onClick={onNavMenuClick} />
      <h3 className="h3">{title}</h3>
      <div className="search">
        <GlobalSearch />
      </div>
      <NightModeSwitch />
    </header>
  );
};

export default Header;

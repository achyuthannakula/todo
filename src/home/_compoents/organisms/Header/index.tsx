import React from 'react';
import SidebarToggleButton from '../../atoms/SidebarToggleButton';
import GlobalSearch from '../GlobalSearch';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <SidebarToggleButton />
      <h3 className="h3">title</h3>
      <div className="search">
        <GlobalSearch />
      </div>
    </header>
  );
};

export default Header;

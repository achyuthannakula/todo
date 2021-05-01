import React from 'react';
import NavItem from '../../molecules/NavItem';
import './index.css';

const Navbar = ({ isNavbarCollapsed, items, activeLabel }) => {
  return (
    <nav className={`navbar ${isNavbarCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-list flex flex-column">
        {items.map((item) => (
          <NavItem
            href={item.link}
            label={item.label}
            isActive={item.label === activeLabel}
            key={item.label}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

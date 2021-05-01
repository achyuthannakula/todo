import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavItem = ({ href, label, isActive = false }) => {
  return (
    <Link
      to={href}
      className={`paragraph nav-item ${isActive ? 'active' : ''}`}
    >
      {label}
    </Link>
  );
};

export default NavItem;

import React from 'react';
import './index.css';

const IconButton = ({
  children,
  className = '',
  isActive = false,
  ...rest
}) => {
  return (
    <button
      tabIndex={0}
      {...rest}
      className={`${className} icon-button ${isActive ? 'active' : ''}`}
    >
      {children}
    </button>
  );
};

export default IconButton;

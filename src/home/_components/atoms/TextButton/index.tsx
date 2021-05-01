import React from 'react';
import './index.css';

const TextButton = ({ children, className = '', isActive, ...rest }) => {
  return (
    <button
      tabIndex={0}
      {...rest}
      className={`${className} text-button paragraph ${
        isActive ? 'active' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default TextButton;

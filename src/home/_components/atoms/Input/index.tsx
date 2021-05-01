import React from 'react';
import './index.css';

const Input = ({ fullWidth = false, ...rest }) => {
  return (
    <input
      {...rest}
      className={`input-atom ${fullWidth ? 'full-width' : ''} ${
        rest.className || ''
      }`}
    />
  );
};

export default Input;

import React from 'react';
import './index.css';

const TextArea = ({ fullWidth = false, value, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={`textarea-atom ${fullWidth ? 'full-width' : ''} ${
        rest.className || ''
      }`}
      value={value}
    />
  );
};

export default TextArea;

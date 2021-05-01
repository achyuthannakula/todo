import React from 'react';
import CloseIcon from '../../atoms/CloseIcon';
import IconButton from '../../atoms/IconButton';
import './index.css';

const SearchBox = ({
  value = undefined as string | undefined,
  onClear,
  onBlur,
  onChange,
  showClearIcon,
  className = '',
  inputRef,
}) => {
  return (
    <div className={`flex search-box ${className}`}>
      <input
        ref={inputRef}
        placeholder="Search"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <IconButton
        className={`${showClearIcon ? 'enable' : ''} close-icon`}
        onClick={onClear}
      >
        <CloseIcon width="1rem" height="1rem" />
      </IconButton>
    </div>
  );
};

export default SearchBox;

import React from 'react';
import CloseIcon from '../../atoms/CloseIcon';
import './index.css';

const SearchBox = ({
  value,
  onClear,
  onBlur,
  onChange,
  showClearIcon,
  className = '',
}) => {
  return (
    <div className={`flex search-box ${className}`}>
      <input
        placeholder="Search"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {showClearIcon && (
        <CloseIcon
          className="active close-icon"
          onClick={onClear}
          tabIndex={0}
        />
      )}
    </div>
  );
};

export default SearchBox;

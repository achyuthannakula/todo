import React from 'react';
import SearchBox from '../../molecules/SearchBox';
import useGlobalSearch from './hook';

const GlobalSearch = () => {
  const {
    handleChange,
    handleClear,
    handleBlur,
    inputRef,
    searchValue,
  } = useGlobalSearch();

  return (
    <SearchBox
      inputRef={inputRef}
      onChange={handleChange}
      showClearIcon={!!searchValue}
      onClear={handleClear}
      onBlur={handleBlur}
    />
  );
};

export default GlobalSearch;

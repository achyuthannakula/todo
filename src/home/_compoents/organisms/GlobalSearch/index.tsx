import React from 'react';
import SearchBox from '../../molecules/SearchBox';
import useGlobalSearch from './hook';

const GlobalSearch = () => {
  const {
    handleChange,
    handleClear,
    handleBlur,
    searchValue,
  } = useGlobalSearch();
  
  return (
    <SearchBox
      value={searchValue}
      onChange={handleChange}
      showClearIcon={!!searchValue}
      onClear={handleClear}
      onBlur={handleBlur}
    />
  );
};

export default GlobalSearch;

import React from 'react';
import useDebounce from '../../../../core-utils/hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../../../core-utils/redux/actions';

const useGlobalSearch = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();

  useDebounce(() => {
    dispatch(updateSearch(searchValue));
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  const handleBlur = () => {
    // setSearchValue('');
  };

  return { handleChange, handleClear, handleBlur, searchValue };
};

export default useGlobalSearch;

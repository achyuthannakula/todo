import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  getDebounce,
  getUrlWithSearchParams,
} from '../../../../core-utils/helpers';
import useLocationSearchParams from '../../../../core-utils/hooks/useLocationSearchParams';

const useGlobalSearch = () => {
  const {
    location: { pathname },
    searchParams: { search: searchParam, ...rest },
  } = useLocationSearchParams();
  const history = useHistory();
  const inputRef = React.useRef<HTMLInputElement>();
  const [debounce] = React.useState(() => {
    return getDebounce();
  });

  React.useEffect(() => {
    if (inputRef.current && typeof searchParam === 'string') {
      inputRef.current.value = searchParam;
    }
  }, []);

  React.useEffect(() => {
    if (searchParam && typeof searchParam !== 'string') {
      handleClear();
    }
    if (searchParam === undefined) {
      handleClear(false);
    }
  }, [searchParam]);

  const updateSearchState = (value?: string, immediate = false) => {
    debounce(
      () =>
        history.push(
          getUrlWithSearchParams(
            pathname,
            value ? { search: value, ...rest } : { ...rest },
          ),
        ),
      immediate,
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchState(e.target.value);
  };

  const handleClear = (updateState = true) => {
    if (inputRef.current) {
      inputRef.current.value = '';
      updateState && updateSearchState('', true);
    }
  };

  const handleBlur = () => {
    // handleClear();
  };

  return {
    handleChange,
    handleClear,
    handleBlur,
    inputRef,
    searchValue: searchParam,
  };
};

export default useGlobalSearch;

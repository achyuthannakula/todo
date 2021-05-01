import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QueryString from 'qs';

const useLocationSearchParams = () => {
  const location = useLocation();
  const params = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const history = useHistory();

  return { searchParams: params, location, history };
};

export default useLocationSearchParams;

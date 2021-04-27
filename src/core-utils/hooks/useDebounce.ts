import React from 'react';

const useDebounce = (
  callback: Function,
  dept: React.DependencyList,
  delay = 800,
) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, dept);
};

export default useDebounce;

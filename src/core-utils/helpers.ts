import QueryString from 'qs';

export const getUrlWithSearchParams = (path: string, searchParams: any) => {
  return {
    pathname: path,
    search: QueryString.stringify(searchParams, { addQueryPrefix: true }),
  };
};

export const getDebounce = (delay = 800) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (callback: Function, immediate = false) => {
    clearInterval(timerId);
    if (immediate) {
      callback();
    } else {
      timerId = setTimeout(() => {
        callback();
      }, delay);
    }
  };
};

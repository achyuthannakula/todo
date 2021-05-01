import React, { StyleHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { NotesState } from '../../../../core-utils/redux/types';

const NightModeProvider = ({ children }) => {
  const isNightMode: boolean = useSelector((store: NotesState) => {
    return store.nightMode;
  });

  React.useEffect(() => {
    const body = document.documentElement;
    if (body) {
      if (isNightMode) {
        body.className = 'night-mode';
      } else {
        body.className = '';
      }
    }
  }, [isNightMode]);

  return children;
};

export default NightModeProvider;

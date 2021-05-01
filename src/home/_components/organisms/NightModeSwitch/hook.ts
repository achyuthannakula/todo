import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNightMode } from '../../../../core-utils/redux/actions';
import { NotesState } from '../../../../core-utils/redux/types';

const useNightModeSwitch = () => {
  const isNightMode: boolean = useSelector((store: NotesState) => {
    return store.nightMode;
  });

  const dispatch = useDispatch();

  const handleNightClick = () => {
    dispatch(updateNightMode(true));
  };

  const handleDayClick = () => {
    dispatch(updateNightMode(false));
  };

  return { isNightMode, handleNightClick, handleDayClick };
};

export default useNightModeSwitch;

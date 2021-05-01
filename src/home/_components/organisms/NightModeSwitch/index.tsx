import React from 'react';
import DayModeIcon from '../../atoms/DayModeIcon';
import IconButton from '../../atoms/IconButton';
import NightModeIcon from '../../atoms/NightModeIcon';
import useNightModeSwitch from './hook';

const NightModeSwitch = () => {
  const {
    isNightMode,
    handleNightClick,
    handleDayClick,
  } = useNightModeSwitch();

  return (
    <>
      {isNightMode ? (
        <IconButton onClick={handleDayClick} title="Toggle to Day Mode">
          <DayModeIcon width="1rem" height="1rem" />
        </IconButton>
      ) : (
        <IconButton onClick={handleNightClick} title="Toggle to Night Mode" u>
          <NightModeIcon width="1rem" height="1rem" />
        </IconButton>
      )}
    </>
  );
};

export default NightModeSwitch;

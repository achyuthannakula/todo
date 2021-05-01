import React from 'react';
import useNotesRouteMatch from '../../core-utils/hooks/useNotesRouteMatch';

const useHomePage = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = React.useState(false);
  const { activeRoute } = useNotesRouteMatch();

  const handleNavMenuClick = () => {
    setIsNavbarCollapsed((state) => !state);
  };

  return { isNavbarCollapsed, activeRoute, handleNavMenuClick };
};

export default useHomePage;

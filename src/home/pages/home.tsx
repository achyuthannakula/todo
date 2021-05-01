import React from 'react';
import { RouteToNotesType } from '../../core-utils/constants';
import Header from '../_components/organisms/Header';
import Navbar from '../_components/organisms/Navbar';
import NotesMainBody from '../_components/organisms/NotesMainBody';
import HomeTemplate from '../_components/templates/HomeTemplate';
import useHomePage from './hook';

const Home = () => {
  const { handleNavMenuClick, activeRoute, isNavbarCollapsed } = useHomePage();

  return (
    <HomeTemplate
      header={
        <Header onNavMenuClick={handleNavMenuClick} title={activeRoute} />
      }
      navbar={
        <Navbar
          items={[
            { label: RouteToNotesType['active-notes'], link: '/active-notes' },
            {
              label: RouteToNotesType['archived-notes'],
              link: '/archived-notes',
            },
          ]}
          activeLabel={activeRoute}
          isNavbarCollapsed={isNavbarCollapsed}
        />
      }
      main={<NotesMainBody />}
    />
  );
};

export default Home;

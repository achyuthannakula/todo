import React from 'react';
import history from './core-utils/history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { ACTIVE_NOTES, ARCHIVE_NOTES } from './core-utils/routes';
import { Provider } from 'react-redux';
import { persistor, store } from './core-utils/redux/store';
import Home from './home/pages/home';
import { PersistGate } from 'redux-persist/integration/react';
import NightModeProvider from './home/_components/organisms/NightModeProvider';

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={'loading...'} persistor={persistor}>
        <NightModeProvider>
          <Router history={history}>
            <Switch>
              <Route path={[ACTIVE_NOTES, ARCHIVE_NOTES]} component={Home} />
              <Redirect to={ACTIVE_NOTES} />
            </Switch>
          </Router>
        </NightModeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

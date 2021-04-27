import React from 'react';
import history from './core-utils/history';
import { Route, Router } from 'react-router-dom';
import { HOME } from './core-utils/routes';
import { Provider } from 'react-redux';
import store from './core-utils/redux/store';

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path={HOME} component={() => <>HOME</>} />
      </Router>
    </Provider>
  );
};

export default App;

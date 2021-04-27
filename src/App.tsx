import React from "react";
import history from "./core-utils/history";
import { Route, Router } from "react-router-dom";
import { HOME } from "./core-utils/routes";

const App: React.FC<{}> = () => {
  return (
    <Router history={history}>
      <Route exact path={HOME} component={() => <>HOME</>} />
    </Router>
  );
};

export default App;

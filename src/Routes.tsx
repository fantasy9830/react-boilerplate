import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoggedInRoute from './components/LoggedInRoute';

import Login from './screens/Login';
import Layout from './layouts';

const Routes = () => (
  <Router>
    <Switch>
      {/* Not logged in */}
      <Route exact path="/login" component={Login} />
      {/* Logged in */}
      <LoggedInRoute component={Layout} />
    </Switch>
  </Router>
);

export default Routes;

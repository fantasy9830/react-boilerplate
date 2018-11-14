import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import history from './history';

import LoginPage from './components/Auth/LoginPage';
import Layout from './layouts';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* public */}
      <Route exact path="/signin" component={LoginPage} />
      {/* private */}
      <PrivateRoute component={Layout} />
    </Switch>
  </Router>
);

export default Routes;

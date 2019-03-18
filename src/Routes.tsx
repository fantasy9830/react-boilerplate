import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import history from './history';

import Login from './screens/Login';
import Layout from './layouts';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* public */}
      <Route exact path="/login" component={Login} />
      {/* private */}
      <PrivateRoute component={Layout} />
    </Switch>
  </Router>
);

export default Routes;

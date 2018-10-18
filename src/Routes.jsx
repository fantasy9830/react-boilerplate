import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LoginPage from './components/Auth/LoginPage';
import Layout from './layouts';

const Routes = () => (
  <Switch>
    {/* public */}
    <Route exact path="/login" component={LoginPage} />
    {/* private */}
    <PrivateRoute component={Layout} />
  </Switch>
);

export default Routes;

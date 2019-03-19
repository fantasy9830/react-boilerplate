import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './screens/Login';
import Layout from './layouts';

const Routes = () => (
  <Router>
    <Switch>
      {/* public */}
      <Route exact path="/login" component={Login} />
      {/* private */}
      <PrivateRoute component={Layout} />
    </Switch>
  </Router>
);

export default Routes;

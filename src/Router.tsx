import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoggedInRoute from './components/LoggedInRoute';

import Login from './pages/Login';
import Layout from './layouts';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* Not logged in */}
      <Route exact path="/login" component={Login} />
      {/* Logged in */}
      <LoggedInRoute component={Layout} />
    </Switch>
  </BrowserRouter>
);

export default Router;

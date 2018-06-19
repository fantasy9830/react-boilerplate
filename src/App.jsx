import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LoginPage from './components/Auth/LoginPage';
import Layout from './components/Layout';

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <PrivateRoute component={Layout} />
  </Switch>
);

export default App;

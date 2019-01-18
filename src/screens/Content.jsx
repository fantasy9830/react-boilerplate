import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Authorized } from 'ant-design-pro';
import { flatten } from './../utils';
import HomeScreen from './Home';
import NoMatch from './Exception/NoMatch';
import Forbidden from './Exception/Forbidden';

const Content = ({ menus, permissions }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      {flatten(menus).map(route => {
        const { Secured } = Authorized(route.key);

        return (
          <Route
            exact
            key={route.key}
            path={route.path}
            component={Secured(permissions, <Forbidden />)(route.component)}
          />
        );
      })}
      <Route component={NoMatch} />
    </Switch>
  );
};

Content.propTypes = {
  menus: PropTypes.array.isRequired,
  permissions: PropTypes.array.isRequired,
};

export default Content;

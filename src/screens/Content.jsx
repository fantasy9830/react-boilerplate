import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Authorized } from 'ant-design-pro';
import HomeScreen from './Home';
import NoMatch from './Exception/NoMatch';
import Forbidden from './Exception/Forbidden';

function formatter(menus = []) {
  return menus.reduce((router, item) => {
    if (item.path && item.component) {
      router.push(item);
    } else if (item.children) {
      formatter(item.children).forEach(element => router.push(element));
    }

    return router;
  }, []);
}

const Content = ({ menus, permissions }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      {formatter(menus).map(route => {
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

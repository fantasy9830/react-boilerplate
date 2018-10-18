import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Authorized } from 'ant-design-pro';
import Home from './../components/Home';
import NoMatch from './../components/Exception/NoMatch';
import Forbidden from './../components/Exception/Forbidden';

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

const ContentRoute = ({ menus, permissions }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
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

ContentRoute.propTypes = {
  menus: PropTypes.array.isRequired,
  permissions: PropTypes.array.isRequired,
};

export default ContentRoute;

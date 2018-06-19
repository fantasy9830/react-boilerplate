import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './../components/Home';
import NoMatch from './../components/NoMatch';

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

const ContentRoute = ({ menus }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {formatter(menus).map(route => (
        <Route
          exact
          key={route.key}
          path={route.path}
          component={route.component}
        />
      ))}
      <Route component={NoMatch} />
    </Switch>
  );
};

ContentRoute.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default ContentRoute;

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { flatten } from '../utils';
import { authorized } from '../utils/auth';
import PageLoading from '../components/PageLoading';
import HomeScreen from '../pages/Home';
import NoMatch from '../components/Exception/NoMatch';
import Forbidden from '../components/Exception/Forbidden';

const ContentRouter = ({ menus, permissions }) => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        {flatten(menus).map((route) => {
          const check = authorized(route.key);

          return (
            <Route
              exact
              key={route.key}
              path={route.path}
              component={check(permissions, route.component, Forbidden)}
            />
          );
        })}
        <Route component={NoMatch} />
      </Switch>
    </React.Suspense>
  );
};

ContentRouter.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      authority: PropTypes.bool,
      icon: PropTypes.any,
      path: PropTypes.string,
      component: PropTypes.any,
      children: PropTypes.any,
    }),
  ).isRequired,
  permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentRouter;

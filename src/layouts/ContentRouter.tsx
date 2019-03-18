import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Authorized } from 'ant-design-pro';
import { flatten } from '../utils';
import PageLoading from '../components/PageLoading';
import HomeScreen from '../screens/Home';
import NoMatch from '../components/Exception/NoMatch';
import Forbidden from '../components/Exception/Forbidden';

export interface IProps {
  menus: IMenus[];
  permissions: string[];
}

const ContentRouter = ({ menus, permissions }: IProps) => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        {flatten(menus).map((route: IMenus) => {
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
    </React.Suspense>
  );
};

export default ContentRouter;

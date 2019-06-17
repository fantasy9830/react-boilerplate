import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import { flatten } from './../utils';
import PageLoading from './../components/PageLoading';
import HomeScreen from './../pages/Home';
import NoMatch from './../components/Exception/NoMatch';
import Forbidden from './../components/Exception/Forbidden';

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
          const { check } = RenderAuthorized(route.key);

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

export default ContentRouter;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Authorized } from 'ant-design-pro';
import { flatten } from './../utils';
import HomeScreen from './Home';
import NoMatch from './Exception/NoMatch';
import Forbidden from './Exception/Forbidden';

export interface IProps {
  menus: IMenus[];
  permissions: string[];
}

const Content = ({ menus, permissions }: IProps) => {
  return (
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
  );
};

export default Content;

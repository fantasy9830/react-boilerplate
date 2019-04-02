import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

export interface ILoggedInRouteProps extends RouteProps {
  isLogged: boolean;
  component: any;
}

const LoggedInRoute = ({
  component: Component,
  isLogged,
  ...rest
}: ILoggedInRouteProps) => (
  <Route
    {...rest}
    render={props =>
      isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default connect((state: IStoreState) => ({
  isLogged: state.user.isLogged,
}))(LoggedInRoute);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreState from 'StoreState';

const PrivateRoute = ({ component: Component, login, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      login ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default connect((state: any) => ({ login: state.user.login }))(
  PrivateRoute,
);

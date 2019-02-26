import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default connect((state: any) => ({ loggedIn: state.user.loggedIn }))(
  PrivateRoute,
);

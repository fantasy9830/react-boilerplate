import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      login ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default connect(state => ({ login: state.user.login }))(PrivateRoute);

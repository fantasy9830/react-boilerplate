import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode';

import { types } from './redux/user';
import reducers from './reducers';

// middlewares
let middlewares = [thunk];

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  // logger
  const loggerMiddleware = createLogger({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state)),
  });

  middlewares = [...middlewares, loggerMiddleware];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const stores = createStore(reducers, enhancer);

const token = localStorage.getItem('@Ricky:token');
if (token) {
  const decoded = jwtDecode(token);

  // token過期
  if (dayjs.unix(decoded.exp).isBefore(dayjs())) {
    stores.dispatch({
      type: types.LOG_OUT,
    });

    localStorage.removeItem('@Ricky:token');
  } else {
    stores.dispatch({
      type: types.LOG_IN,
      id: decoded.jti,
      name: decoded.name,
      username: decoded.username,
      email: decoded.email,
      address: decoded.address,
      roles: decoded.roles,
      permissions: decoded.permissions,
      token: token,
    });
  }
}

export default stores;

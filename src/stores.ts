import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

import { LOG_IN, LOG_OUT } from './redux/user';
import reducers from './reducers';

import Redux from 'redux';

// middlewares
let middlewares: Array<Redux.Middleware> = [thunk];

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

const stores = createStore<IStoreState, Redux.AnyAction, any, any>(reducers, enhancer);

const token = localStorage.getItem('@Ricky:token');
if (token) {
  const decoded: IClaims = jwtDecode(token);

  // token過期
  if (dayjs.unix(decoded.exp).isBefore(dayjs())) {
    stores.dispatch({
      type: LOG_OUT,
    });

    localStorage.removeItem('@Ricky:token');
  } else {
    stores.dispatch({
      type: LOG_IN,
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

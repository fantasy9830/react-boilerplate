import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { types } from './redux/user';
import reducers from './reducers';

export const history = createHistory();

// middlewares
let middlewares = [thunkMiddleware, routerMiddleware(history)];

// logger
const loggerMiddleware = createLogger({
  collapsed: true,
  stateTransformer: state => JSON.parse(JSON.stringify(state)),
});

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, loggerMiddleware];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const stores = createStore(reducers, enhancer);

const token = localStorage.getItem('token');
if (token) {
  stores.dispatch({
    type: types.LOGIN,
    token: token,
    id: '001',
    name: 'Ricky',
  });
}

export default stores;

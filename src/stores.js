import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

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

export default stores;

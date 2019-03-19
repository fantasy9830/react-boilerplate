import Redux, { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

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

export default stores;

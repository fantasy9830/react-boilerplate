import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import redux from './redux';

export default combineReducers({
  router: routerReducer,
  ...redux,
});

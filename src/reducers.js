import { combineReducers } from 'redux';
import redux from './redux';

const reducers = {
  ...redux,
};

export default combineReducers(reducers);

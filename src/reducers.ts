import { combineReducers } from 'redux';
import redux from './redux';

const reducers: object = {
  ...redux,
};

export default combineReducers(reducers);

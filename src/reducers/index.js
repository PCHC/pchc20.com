import { combineReducers } from 'redux';
import NavReducer from './reducer_nav';

const rootReducer = combineReducers({
  nav: NavReducer
});

export default rootReducer;

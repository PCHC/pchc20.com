import { combineReducers } from 'redux';
import NavReducer from './reducer_nav';
import Timeline from '../data/timeline';

const rootReducer = combineReducers({
  nav: NavReducer,
  timeline: Timeline
});

export default rootReducer;

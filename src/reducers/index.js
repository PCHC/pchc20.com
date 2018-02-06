import { combineReducers } from 'redux';
import NavReducer from './reducer_nav';
import Timeline from '../data/timeline';
import Services from '../data/services';

const rootReducer = combineReducers({
  nav: NavReducer,
  timeline: Timeline,
  services: Services,
});

export default rootReducer;

import { combineReducers } from 'redux';
import NavReducer from './reducer_nav';
import LoaderReducer from './reducer_loader';
import Timeline from '../data/timeline';
import Services from '../data/services';

const rootReducer = combineReducers({
  nav: NavReducer,
  loader: LoaderReducer,
  timeline: Timeline,
  services: Services,
});

export default rootReducer;

import { combineReducers } from 'redux';
import SatelliteReducer from './satellite';

const rootReducer = combineReducers({
  satellite: SatelliteReducer
});

export default rootReducer;

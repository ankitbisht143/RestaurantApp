import {combineReducers} from 'redux';
import auth from './authReducer';
import event from './eventsReducer';

const rootReducer=combineReducers({
  auth,
  event
})

export default rootReducer;

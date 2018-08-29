import * as types from './types';
import * as actions from './authActions';

export const getEvents = () => {
  return{
    type:types.FETCH_EVENTS
  }
}

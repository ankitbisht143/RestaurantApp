import * as types from './types';
import * as actions from './authActions';
import {WOOBLY_BASE_URL} from '../api/url';

export function eventsFound(events){
  return{
    type:types.SHOW_EVENTS,
    events
  }
}
export function isLoading(bool){
  return{
    type:types.IS_LOADING,
    isLoading:bool
  }
}


export function getEvents(){

  return dispatch => {
    dispatch(isLoading(true))
    return fetch(`${WOOBLY_BASE_URL}/assignment.php`)
    .then((response) => {
      if(response.status < 300){

        dispatch(isLoading(false))
        response.json().then((responseJSON) => {
          dispatch(eventsFound(responseJSON))
        })
      }
    })
  }
}

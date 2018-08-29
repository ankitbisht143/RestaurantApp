import * as types from '../actions/types';

const INITIAL_STATE={
  isLoading:false,
  events:[],
  error:{}
}

export default function event(state=INITIAL_STATE,action){
  if(action.type == types.IS_LOADING){
    return {
      ...state,
      isLoading:true
    }
  }
  if(action.type == types.SHOW_EVENTS){
    return {
      ...state,
      isLoading:false,
      events:action.events
    }
  }
  if(action.type == types.FETCH_FAILED){
    return {
      ...state,
      isLoading:false,
      error:action.error
    }
  }
  return state

}

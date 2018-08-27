import * as types from '../actions/types';

const INITIAL_STATE={
  isLoggedIn:false,
  isLoading:false,
  userData:{},
  error:undefined
}

export default function auth(state=INITIAL_STATE,action){

  switch (action.type){
    case types.IS_LOADING:
      return{
        ...state,
        isLoading:true,
        isLoggedIn:false
      }
      break;
    case types.LOGIN_SUCCESS:
    console.warn("1st");

      return{
        ...state,
        isLoading:false,
        isLoggedIn:true,
        userData:action.userData,
        error:undefined
      }
      break;
    case types.LOGIN_FAILED:
      return{
        ...state,
        isLoading:false,
        isLoggedIn:false,
        error:action.error
      }
      break;
    default:
      return state;
  }
}

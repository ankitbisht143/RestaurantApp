import {takeLatest,put} from 'redux-saga/effects'

import * as types from '../actions/types';
import {doLogin} from './api/auth';

function* handleLogin(payload){
  try{
    yield put({type:types.IS_LOADING})
    const loginResponse=yield doLogin(payload)
    if(loginResponse.user){
        yield put({type:types.LOGIN_SUCCESS,userData:loginResponse})
    }
    else{
      yield put({type:types.LOGIN_FAILED,error:loginResponse.message})
    }
  } catch(e){
    yield put({type:types.LOGIN_FAILED,error:e})
  }
}
export function* watchLoginAttempt(){

  yield takeLatest(types.LOGIN_ATTEMPT,handleLogin)
}

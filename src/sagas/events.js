import {takeLatest,put} from 'redux-saga/effects'

import * as types from '../actions/types';
import {getEvents} from './api/events'

function* fetchEvents(){
  try {
    yield put({type:types.IS_LOADING})
    const receivedEvents=yield getEvents()
    yield put({type:types.SHOW_EVENTS,events:receivedEvents})
  } catch (e) {
    yield put({type:types.FETCH_FAILED,error:e})
  }
}
export function* watchEvents(){
  yield takeLatest(types.FETCH_EVENTS,fetchEvents)
}

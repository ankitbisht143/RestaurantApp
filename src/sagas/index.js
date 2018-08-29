import {all} from 'redux-saga/effects';
import {watchEvents} from './events'
import {watchLoginAttempt} from './auth'

export default function* rootSaga() {
  yield all([
    watchEvents(),
    watchLoginAttempt()
  ])
}

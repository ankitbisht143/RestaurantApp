import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers'
import {helloSaga} from '../sagas/index'
import rootSaga from '../sagas/'

const sagaMiddleware=createSagaMiddleware()
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store

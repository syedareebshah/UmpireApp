import {takeEvery} from 'redux-saga/effects';
import loginSaga from './loginSaga';
import * as types from '../action/types';

export default function* mySaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginSaga);
}

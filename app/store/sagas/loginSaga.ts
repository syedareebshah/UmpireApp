import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export default function* loginSaga(data) {
  console.log({data});

  try {
    // const user = yield call( action.payload.userId)
    yield put({type: 'USER_FETCH_SUCCEEDED'});
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED'});
  }
}

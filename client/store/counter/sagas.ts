import { put, takeEvery, delay, fork } from 'redux-saga/effects';
import { incrementAction, descrementAction, resetAction } from './actions';
import { INCREMENT_ASYNC, DESCREMENT_ASYNC, RESET_ASYNC, ResetAsyncAction } from './types';

export function* addAsync() {
  yield delay(2000);
  yield put(incrementAction());
}

export function* subAsync() {
  yield delay(2000);
  yield put(descrementAction());
}

export function* resetAsync(action: ResetAsyncAction) {
  yield delay(2000);
  yield put(resetAction(action.payload.num));
}

/* -------------------------------------------------------------------------- */
/*                                   watcher                                  */
/* -------------------------------------------------------------------------- */

export function* watchAddAsync() {
  yield takeEvery(INCREMENT_ASYNC, addAsync);
}

export function* watchSubAsync() {
  yield takeEvery(DESCREMENT_ASYNC, subAsync);
}

export function* watchResetAsync() {
  yield takeEvery(RESET_ASYNC, resetAsync);
}

/* -------------------------------------------------------------------------- */
/*                                    root                                    */
/* -------------------------------------------------------------------------- */

export const counterSagas = [watchAddAsync(), watchSubAsync(), watchResetAsync()];

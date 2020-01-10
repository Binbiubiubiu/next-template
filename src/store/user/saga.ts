import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '@/api/user';
import { UserReducerAction, UserActionType } from './reducer';

function* fetchUser() {
  try {
    const token = yield call(login);
    console.log(login);
    yield put({ type: UserReducerAction.SET_TOKEN_ACTION, token: token });
  } catch (e) {}
}

export enum UserSagaAction {
  USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED',
}

export function* userSaga() {
  yield takeEvery(UserSagaAction.USER_FETCH_REQUESTED, fetchUser);
}

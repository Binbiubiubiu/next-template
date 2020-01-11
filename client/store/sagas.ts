import { all } from 'redux-saga/effects';
import { CounterSaga } from './counter/sagas';

export default function* rootSaga() {
  yield all([CounterSaga()]);
}

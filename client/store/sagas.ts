import { all } from 'redux-saga/effects';
import { counterSagas } from './counter/sagas';

export default function* rootSaga() {
  yield all([...counterSagas]);
}

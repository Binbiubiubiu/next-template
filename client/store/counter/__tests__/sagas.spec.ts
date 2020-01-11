import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { addAsync, subAsync, resetAsync } from '../sagas';
import { incrementAction, descrementAction, resetAsyncAction, resetAction } from '../actions';
import { ResetAsyncAction } from '../types';
import { CounterReducer } from '../reducers';

describe('async actions', () => {
  it('creates INCREMENT_ASYNC to add one async ', () => {
    testSaga(addAsync)
      .next()
      .delay(2000)
      .next()
      .put(incrementAction())
      .next()
      .isDone();

    return expectSaga(addAsync)
      .withReducer(CounterReducer)
      .hasFinalState({ num: 1 })
      .run(2000);
  });

  it('creates DESCREMENT_ASYNC to sub one async ', () => {
    testSaga(subAsync)
      .next()
      .delay(2000)
      .next()
      .put(descrementAction())
      .next()
      .isDone();

    return expectSaga(subAsync)
      .withReducer(CounterReducer)
      .hasFinalState({ num: -1 })
      .run(2000);
  });

  it('creates RESET_ASYNC to sub one async ', () => {
    testSaga(resetAsync, resetAsyncAction(0) as ResetAsyncAction)
      .next()
      .delay(2000)
      .next()
      .put(resetAction(0))
      .next()
      .isDone();

    return expectSaga(resetAsync, resetAsyncAction(10) as ResetAsyncAction)
      .withReducer(CounterReducer)
      .hasFinalState({ num: 10 })
      .run(2000);
  });
});

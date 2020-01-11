import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { incrementAction, descrementAction, resetAction } from '../actions';
import { INCREMENT, DESCREMENT, CounterState, RESET } from '../types';
import { Middleware } from 'redux';
import { CounterReducer } from '../reducers';

const middlewares: Middleware[] = [];
const mockStore = configureStore<CounterState>(middlewares);

describe('reducers', () => {
  let store: MockStoreEnhanced<CounterState>;
  beforeAll(() => {
    store = mockStore({ num: 0 });
  });

  beforeEach(() => {
    store.clearActions();
  });

  it('creates INCREMENT to add one', () => {
    const expectedActions = [{ type: INCREMENT }];

    store.dispatch(incrementAction());
    expect(store.getActions()).toEqual(expectedActions);

    const state = CounterReducer(undefined, incrementAction());
    expect(state.num).toBe(1);
  });

  it('creates DESCREMENT to add one', async () => {
    const expectedActions = [{ type: DESCREMENT }];

    store.dispatch(descrementAction());
    expect(store.getActions()).toEqual(expectedActions);

    const state = CounterReducer(undefined, descrementAction());
    expect(state.num).toBe(-1);
  });

  it('creates RESET to reset zero', async () => {
    const expectedActions = [{ type: RESET, payload: { num: 0 } }];

    store.dispatch(resetAction(0));
    expect(store.getActions()).toEqual(expectedActions);

    const state = CounterReducer({ num: 100 }, resetAction(0));
    expect(state.num).toBe(0);
  });
});

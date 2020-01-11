import {} from '../reducers';
import { INCREMENT, DESCREMENT, RESET } from '../types';
import { incrementAction, descrementAction, resetAction } from '../actions';

describe('actions', () => {
  it('should create an action to add ', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(incrementAction()).toEqual(expectedAction);
  });

  it('should create an action to sub ', () => {
    const expectedAction = {
      type: DESCREMENT,
    };
    expect(descrementAction()).toEqual(expectedAction);
  });

  it('should create an action to reset ', () => {
    const expectedAction = {
      type: RESET,
      payload: {
        num: 0,
      },
    };
    expect(resetAction(0)).toEqual(expectedAction);
  });
});

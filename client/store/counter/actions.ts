import {
  CounterActionTypes,
  INCREMENT,
  DESCREMENT,
  RESET,
  INCREMENT_ASYNC,
  DESCREMENT_ASYNC,
  RESET_ASYNC,
} from './types';

/* -------------------------------------------------------------------------- */
/*                                reducerAction                               */
/* -------------------------------------------------------------------------- */

export function incrementAction(): CounterActionTypes {
  return {
    type: INCREMENT,
  };
}

export function descrementAction(): CounterActionTypes {
  return {
    type: DESCREMENT,
  };
}

export function resetAction(num: number): CounterActionTypes {
  return {
    type: RESET,
    payload: {
      num,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                                 sagaAction                                 */
/* -------------------------------------------------------------------------- */

export function incrementAsyncAction(): CounterActionTypes {
  return {
    type: INCREMENT_ASYNC,
  };
}

export function descrementAsyncAction(): CounterActionTypes {
  return {
    type: DESCREMENT_ASYNC,
  };
}

export function resetAsyncAction(num: number): CounterActionTypes {
  return {
    type: RESET_ASYNC,
    payload: {
      num,
    },
  };
}

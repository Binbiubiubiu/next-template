export interface CounterState {
  num: number;
}

export const INCREMENT = 'INCREMENT';
export const DESCREMENT = 'DESCREMENT';
export const RESET = 'RESET';

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DESCREMENT_ASYNC = 'DESCREMENT_ASYNC';
export const RESET_ASYNC = 'RESET_ASYNC';

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DESCREMENT;
}

export interface ResetAction {
  type: typeof RESET;
  payload: {
    num: number;
  };
}

export interface IncrementAsyncAction {
  type: typeof INCREMENT_ASYNC;
}

export interface DecrementAsyncAction {
  type: typeof DESCREMENT_ASYNC;
}

export interface ResetAsyncAction {
  type: typeof RESET_ASYNC;
  payload: {
    num: number;
  };
}

export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | IncrementAsyncAction
  | DecrementAsyncAction
  | ResetAsyncAction;

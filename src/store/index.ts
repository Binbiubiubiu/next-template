import { createStore, applyMiddleware, Store, AnyAction } from "redux";

export interface StoreType {
  lastUpdate: number;
  light: boolean;
  count: number;
}

const initialState: StoreType = {
  lastUpdate: 0,
  light: false,
  count: 0
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "TICK":
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: initialState.count
      };
    default:
      return state;
  }
};

export const initializeStore = (
  preloadedState: StoreType = initialState
): Store<StoreType> => {
  return createStore(reducer, preloadedState, applyMiddleware());
};

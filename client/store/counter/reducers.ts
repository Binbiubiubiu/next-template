import { CounterState, CounterActionTypes, INCREMENT, DESCREMENT, RESET } from './types';

const initState: CounterState = {
  num: 0,
};

export function CounterReducer(state = initState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, num: state.num + 1 };
    case DESCREMENT:
      return { ...state, num: state.num - 1 };
    case RESET:
      return { ...state, num: action.payload.num };
    default:
      return state;
  }
}

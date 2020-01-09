import { AnyAction } from "redux";

const initState = {
  counter: 0
};

const INCREMENT_ACTION_TYPE = "ADD_ONE";
const DESCREMENT_ACTION_TYPE = "SUB_ONE";

export const INCREMENT = () => ({ type: INCREMENT_ACTION_TYPE });
export const DESCREMENT = () => ({ type: DESCREMENT_ACTION_TYPE });

export default function CounterReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      return state.counter + 1;
    case DESCREMENT_ACTION_TYPE:
      return state.counter - 1;
    default:
      return state;
  }
}

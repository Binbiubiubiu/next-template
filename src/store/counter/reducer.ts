import { Action } from 'redux';

const initState = {
    num: 0,
};

export type CounterStateType = typeof initState;

export enum CounterReducerAction {
    INCREMENT_ACTION = 'ADD_ONE',
    DESCREMENT_ACTION = 'SUB_ONE',
    RESET_ACTION = 'RESET',
}

export type CounterActionType = Action<string> & Partial<CounterStateType>;

export const CounterReducer = (state = initState, action: CounterActionType) => {
    switch (action.type) {
        case CounterReducerAction.INCREMENT_ACTION:
            return { ...state, num: state.num + 1 };
        case CounterReducerAction.DESCREMENT_ACTION:
            return { ...state, num: state.num - 1 };
        case CounterReducerAction.RESET_ACTION:
            return { ...state, num: 0 };
        default:
            return state;
    }
};

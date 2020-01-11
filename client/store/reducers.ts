import { combineReducers } from 'redux';
import { CounterReducer as counter } from './counter/reducers';

const rootReducer = combineReducers({ counter });

export default rootReducer;

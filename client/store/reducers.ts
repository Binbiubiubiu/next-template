import { combineReducers } from 'redux';
import { UserReducer as user } from './user';
import { CounterReducer as counter } from './counter';

export default combineReducers({ user, counter });

import { Action } from "redux";

const initState = {
  token: "",
  userInfo: {}
};

export type UserStateType = typeof initState;

export enum UserReducerAction {
  SET_TOKEN_ACTION = "SET_TOKEN",
  SET_USERINFO_ACTION = "SET_USERINFO"
}

export type UserActionType = Action<String> & Partial<UserStateType>;

export const UserReducer = (state = initState, action: UserActionType) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_USERINFO":
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
};

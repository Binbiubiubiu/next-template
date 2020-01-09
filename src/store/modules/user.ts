import { AnyAction } from "redux";

const initState = {
  token: "",
  userInfo: {}
};

export default function UserReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload.token };
    case "SET_USERINFO":
      return { ...state, userInfo: action.payload.userInfo };
    default:
      return state;
  }
}

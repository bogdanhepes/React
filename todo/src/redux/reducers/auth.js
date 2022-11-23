import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./../../actions/types";

const user = localStorage.getItem("user");

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: false,
        isRegistered: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: false,
        isRegistered: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggedOut: false,
        isRegistered: false,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: false,
        isRegistered: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: true,
        isRegistered: false,
        user: null,
      };
    default:
      return state;
  }
}

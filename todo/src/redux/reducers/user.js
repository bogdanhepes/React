import {
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_SUCCESS,
  } from "./../../actions/types";
  
  const initialState = {};
  
  // eslint-disable-next-line
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_USER_SUCCESS:
        return {
          ...state,
          user: payload,
        };
      case GET_USER_FAIL:
        return {
          ...state,
          user: null,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
        };
      case UPDATE_USER_FAIL:
        return {
          ...state,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
        };
      case DELETE_USER_FAIL:
        return {
          ...state,
        };
      default:
        return state;
    }
  }
  
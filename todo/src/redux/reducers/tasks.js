import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
} from "./../../actions/types";

const initialState = {};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
      };
    case GET_TASKS_FAIL:
      return {
        ...state,
        tasks: null,
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
      };
    case ADD_TASK_FAIL:
      return {
        ...state,
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: payload,
      };
    case GET_TASK_FAIL:
      return {
        ...state,
        task: null,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
      };
    case DELETE_TASK_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAIL,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAIL,
  UPDATE_SUBJECT_FAIL,
  UPDATE_SUBJECT_SUCCESS,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAIL,
} from "./../actions/types";

const initialState = {};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: payload,
      };
    case GET_SUBJECTS_FAIL:
      return {
        ...state,
        subjects: null,
      };
    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: payload,
      };
    case GET_SUBJECT_FAIL:
      return {
        ...state,
        subject: null,
      };
    case ADD_SUBJECT_SUCCESS:
      return {
        ...state,
      };
    case ADD_SUBJECT_FAIL:
      return {
        ...state,
      };
    case UPDATE_SUBJECT_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_SUBJECT_FAIL:
      return {
        ...state,
      };
    case DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_SUBJECT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

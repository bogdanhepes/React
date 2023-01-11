import {
  GET_SUBJECTS_FAIL,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECT_FAIL,
  GET_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAIL,
  ADD_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_FAIL,
  UPDATE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAIL,
  DELETE_SUBJECT_SUCCESS,
} from "./types";

import SubjectService from "../services/subject.service";

export const getSubjects = () => (dispatch) => {
  return SubjectService.getSubjects().then(
    (response) => {
      dispatch({
        type: GET_SUBJECTS_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

      dispatch({
        type: GET_SUBJECTS_FAIL,
      });
      
      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

export const getSubject = (id) => (dispatch) => {
  return SubjectService.getSubject(id).then(
    (response) => {
      dispatch({
        type: GET_SUBJECT_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

      dispatch({
        type: GET_SUBJECT_FAIL,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

export const updateSubject = (id, edits) => (dispatch) => {
  return SubjectService.updateSubject(id, edits).then(
    (response) => {
      dispatch({
        type: UPDATE_SUBJECT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

      dispatch({
        type: UPDATE_SUBJECT_FAIL,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

export const addSubject = (description) => (dispatch) => {
  return SubjectService.addSubject(description).then(
    (response) => {
      dispatch({
        type: ADD_SUBJECT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

      dispatch({
        type: ADD_SUBJECT_FAIL,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

export const deleteSubject = (id) => (dispatch) => {
  return SubjectService.deleteSubject(id).then(
    (response) => {
      dispatch({
        type: DELETE_SUBJECT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

      dispatch({
        type: DELETE_SUBJECT_FAIL,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

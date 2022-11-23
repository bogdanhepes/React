import {
  ADD_TASK_FAIL,
  ADD_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_SUCCESS,
  SET_MESSAGE,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
} from "./types";

import TaskService from "../services/task.service";

export const getTasks = () => (dispatch) => {
  return TaskService.getTasks().then(
    (response) => {
      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getTask = (id) => (dispatch) => {
  return TaskService.getTask(id).then(
    (response) => {
      dispatch({
        type: GET_TASK_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_TASK_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const updateTask = (id, edits) => (dispatch) => {
  return TaskService.updateTask(id, edits).then(
    (response) => {
      dispatch({
        type: UPDATE_TASK_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UPDATE_TASK_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const addTask = (description) => (dispatch) => {
  return TaskService.addTask(description).then(
    (response) => {
      dispatch({
        type: ADD_TASK_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: ADD_TASK_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteTask = (id) => (dispatch) => {
  return TaskService.deleteTask(id).then(
    (response) => {
      dispatch({
        type: DELETE_TASK_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_TASK_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

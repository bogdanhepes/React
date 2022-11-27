import {
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    SET_MESSAGE,
    UPDATE_USER_FAIL,
    UPDATE_USER_SUCCESS,
  } from "./types";
  
  import UserService from "../services/user.service";
  
  export const getUser = () => (dispatch) => {
    return UserService.getUser().then(
      (response) => {
        dispatch({
          type: GET_USER_SUCCESS,
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
          type: GET_USER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const updateUser = (edits) => (dispatch) => {
    return UserService.updateUser(edits).then(
      (response) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
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
          type: UPDATE_USER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const deleteUser = () => (dispatch) => {
    return UserService.delete().then(
      (response) => {
        dispatch({
          type: DELETE_USER_SUCCESS,
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
          type: DELETE_USER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
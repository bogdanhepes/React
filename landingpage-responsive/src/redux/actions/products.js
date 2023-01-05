import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from "./types";

import ProductService from "../services/product.service";

export const getProducts = () => (dispatch) => {
  return ProductService.getProducts().then(
    (response) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_PRODUCTS_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const getProduct = (id) => (dispatch) => {
  return ProductService.getProduct(id).then(
    (response) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: GET_PRODUCT_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const updateProduct = (id, edits) => (dispatch) => {
  return ProductService.updateProduct(id, edits).then(
    (response) => {
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: UPDATE_PRODUCT_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const addProduct = (description) => (dispatch) => {
  return ProductService.addProduct(description).then(
    (response) => {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: ADD_PRODUCT_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const deleteProduct = (id) => (dispatch) => {
  return ProductService.deleteProduct(id).then(
    (response) => {
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: DELETE_PRODUCT_FAIL,
      });

      return Promise.reject();
    }
  );
};

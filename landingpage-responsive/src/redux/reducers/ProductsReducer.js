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
} from "./../actions/types";

const initialState = {};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: null,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        product: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

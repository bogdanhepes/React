import axios from "axios";

const productsGet = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};
export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(productsGet(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

const getProducts = () => {
  return axios.get(API_URL);
};

const addProduct = (product) => {
  const data = JSON.stringify({
    title: product.title,
    price: product.price,
    description: product.description,
    image: "https://i.pravatar.cc",
    category: product.category,
  });

  return axios.post(API_URL, data);
};

const getProduct = (id) => {
  return axios.get(API_URL + "/" + id);
};

const updateProduct = (id, edits) => {
  const data = JSON.stringify({
    title: edits.title,
    price: edits.price,
    description: edits.description,
    image: "https://i.pravatar.cc",
    category: edits.category,
  });
  return axios.put(API_URL + "/" + id, data);
};

const deleteProduct = (id) => {
  return axios.delete(API_URL + "/" + id);
};

// eslint-disable-next-line
export default {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

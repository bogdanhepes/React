import axios from "axios";

const API_URL = "https://api-nodejs-todolist.herokuapp.com/user/me";

const getUser = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const updateUser = (edits) => {
  const data = JSON.stringify({
    age: edits.description,
    name: edits.completed,
  });
  return axios.put(API_URL, data, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const deleteUser = () => {
  return axios.delete(API_URL, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

// eslint-disable-next-line
export default {
  getUser,
  updateUser,
  deleteUser,
};

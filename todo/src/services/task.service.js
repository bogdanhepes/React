import axios from "axios";

const API_URL = "https://api-nodejs-todolist.herokuapp.com/task";

const getTasks = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const addTask = (description) => {
  const data = JSON.stringify({
    description: description,
  });
  return axios.post(API_URL, data, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const getTask = (id) => {
  return axios.get(API_URL + "/" + id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const updateTask = (id, edits) => {
  const data = JSON.stringify({
    description: edits.description,
    completed: edits.completed,
  });
  return axios.put(API_URL + "/" + id, data, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

const deleteTask = (id) => {
  return axios.delete(API_URL + "/" + id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json",
    },
  });
};

// eslint-disable-next-line
export default {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};

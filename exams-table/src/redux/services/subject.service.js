import axios from "axios";

const API_URL = "https://63034c269eb72a839d7d1f7e.mockapi.io/subjects";

const getSubjects = () => {
  return axios.get(API_URL);
};

const getSubject = (id) => {
  return axios.get(API_URL + "/" + id);
};

const addSubject = (subject) => {
  return axios.post(API_URL, subject);
};

const updateSubject = (id, edits) => {
  return axios.put(API_URL + "/" + id, edits);
};

const deleteSubject = (id) => {
  return axios.delete(API_URL + "/" + id);
};

// eslint-disable-next-line
export default {
  getSubjects,
  addSubject,
  getSubject,
  updateSubject,
  deleteSubject,
};

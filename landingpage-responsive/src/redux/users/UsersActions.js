import axios from "axios";

const toggleLoading = (status) => {
  return {
    type: "TOGGLE_LOADING",
    payload: status,
  };
};
const usersGet = (users) => {
  return {
    type: "GET_USERS",
    payload: users,
  };
};
export const getUsers = () => {
  return (dispatch) => {
    axios
      .get(`https://63034c269eb72a839d7d1f7e.mockapi.io/users`)
      .then((res) => {
        //dispatch(toggleLoading(true));
        dispatch(usersGet(res.data));
        //dispatch(toggleLoading(false));
      })
      .catch((err) => {
        console.log(err);
        //dispatch(toggleLoading(false));
      });
  };
};

const userAdd = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    axios
      .post(`https://63034c269eb72a839d7d1f7e.mockapi.iio/users`, user)
      .then((res) => {
        dispatch(userAdd(res.data));
        dispatch(toggleLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(toggleLoading(false));
      });
  };
};

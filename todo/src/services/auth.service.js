import axios from "axios";

const API_URL = "https://api-nodejs-todolist.herokuapp.com/user/";

const register = (name, email, password, age) => {
  // const navigate = useNavigate();
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    age,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.token));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout,
};

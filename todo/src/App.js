import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import ToDoList from "./pages/todoList/ToDoList";
import Register from "./pages/register/Register";
import ProfilePage from "./pages/profile/ProfilePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/todolist" element={<ToDoList />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Router>
      <ToastContainer autoClose={3000} limit={1} />
    </>
  );
};

export default App;

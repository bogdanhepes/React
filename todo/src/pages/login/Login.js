import React, { useEffect } from "react";
import "./Login.scss";

import LoginForm from "./loginForm/LoginForm";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todolist");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="container-fluid">
        <div className="card mx-auto">
          <div className="card-header ">
            <h2 className="align-items-center m-0 py-2">
              <strong className="text-dark p-0">Log In</strong>
            </h2>
          </div>
          <div className="card-body px-0">
            <LoginForm />
          </div>
          <div className="card-footer ">
            <div className="d-flex justify-content-between pt-2 pb-3">
              <div>Don't have an account?</div>
              <Link to="/register">
                <strong className="text-dark">Register here</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

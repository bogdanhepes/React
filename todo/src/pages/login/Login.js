import React, { useEffect, useState } from "react";
import "./Login.scss";

import LoginForm from "./loginForm/LoginForm";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isRegistered, isLoggedOut } = useSelector(
    (state) => state.auth
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      setTimeout(() => {
        navigate("/todolist");
      }, 3000);
    }
  }, [isLoggedIn, navigate]);

  if (isRegistered) {
    toast.success("User registered successfully!", {
      toastId: "successRegister",
    });
  }
  if (isLoggedOut) {
    toast.success("User logged out successfully!", {
      toastId: "successLogout",
    });
  }
  return (
    <>
      <div className="container-fluid">
        {loading ? (
          <div className="pulse"></div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default Login;

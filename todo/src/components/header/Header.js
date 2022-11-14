import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";

import { logout } from "../../actions/auth";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isLoggedIn } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/todolist">
            <strong className="navbar-brand">ToDo List</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto d-flex flex-row align-items-center">
              <label className="userMessage pe-4 ">Hello, user!</label>
              <Link to="/">
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  onClick={() => dispatch(logout())}
                >
                  LogOut
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

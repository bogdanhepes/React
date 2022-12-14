import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";

import { logout } from "../../actions/auth";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { getUser } from "../../actions/user";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    dispatch(getUser()).catch(() => {
      toast.error("Failed to load user data!", { toastId: "errorUserLoad" });
    });
    // eslint-disable-next-line
  }, []);

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/todolist">
              <strong className="navbar-brand">ToDo List</strong>
            </Link>
            <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
              <div className="nav-link profilePicture me-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="dropdown d-block">
                <div
                  className="nav-link dropdown-toggle d-block"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>{user?.name}</strong>
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  style={{
                    position: "absolute",
                    inset: "auto -13px auto auto",
                    margin: 0,
                  }}
                >
                  <li>
                    <Link to="/profile">
                      <div className="dropdown-item dropdown-item-light">
                        View profile
                      </div>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/">
                      <div
                        className="dropdown-item"
                        onClick={() => handleLogout()}
                      >
                        LogOut
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

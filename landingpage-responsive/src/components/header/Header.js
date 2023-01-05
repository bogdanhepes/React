import React, { useEffect } from "react";
import "./Header.scss";

import { Logo } from "../global/SvgComponents.js";
// import SignInModal from "../modals/signIn/SignInModal";
// import SignUpModal from "../modals/signUp/SignUpModal";
import { Link } from "react-router-dom";

import { useDispatch} from "react-redux";
// import { getUsers } from "../../redux/users/UsersActions";

const Header = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <nav className="nav navbar navbar-expand-lg p-5">
        <div className="mainContainer container d-flex justify-content-between">
          <Link to="/">
            <Logo />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto d-flex justify-content-between align-items-center">
              <Link to="/About">
                <a className="nav-link" href="/">
                  About
                </a>
              </Link>
              <Link to="/Features">
                <a className="nav-link" href="/">
                  Features
                </a>
              </Link>
              <Link to="/Pricing">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </Link>
              <Link to="/Testimonials">
                <a className="nav-link" href="/">
                  Testimonials
                </a>
              </Link>
              <Link to="/Help">
                <a className="nav-link" href="/">
                  Help
                </a>
              </Link>
            </div>
            <div className="navbar-nav d-flex justify-content-between align-items-center">
              <a
                className="nav-link"
                // data-bs-toggle="modal"
                // data-bs-target="#signInModal"
                href="/"
              >
                Sign In
              </a>
              <button
                className="button1 btn btn-outline-danger mx-auto"
                // data-bs-toggle="modal"
                // data-bs-target="#signUpModal"
              >
                Sign Up
              </button>
              {/* <SignInModal />
              <SignUpModal /> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

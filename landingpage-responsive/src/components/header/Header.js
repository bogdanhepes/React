import React from "react";
import "./Header.scss";

import {Logo} from "../global/SvgComponents.js"

const Header = () => {
  return (
    <>
        <nav className="nav navbar navbar-expand-lg p-5">
          <div className="mainContainer container-fluid d-flex justify-content-between">
            <Logo/>
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
              <div className="navbar-nav mx-auto d-flex justify-content-between">
                <a className="nav-link" href="/">
                  About
                </a>
                <a className="nav-link" href="/">
                  Features
                </a>
                <a className="nav-link" href="/">
                  Pricing
                </a>
                <a className="nav-link " href="/">
                  Testimonials
                </a>
                <a className="nav-link " href="/">
                  Help
                </a>
              </div>
              <div className="navbar-nav d-flex justify-content-between">
                <a className="nav-link" href="/">
                  Sign In
                </a>
                <button className="button1 mx-auto">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Header;

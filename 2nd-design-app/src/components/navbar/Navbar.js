import React from "react";
import "./Navbar.scss";

import { LogoAndName, MenuIcon } from "../../global/Svgs";
import AppStore from "../../global/photos/AppStore.png";
import GooglePlay from "../../global/photos/GooglePlay.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pb-6">
        <div className="container">
          <LogoAndName />
          <div className="stores-md ms-auto me-4">
            <img className="storeBadge me-3" src={GooglePlay} alt="" />
            <img className="storeBadge" src={AppStore} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item pe-2">
                <a className="nav-link " aria-current="page" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Help
                </a>
              </li>
              <li className="stores-sm mx-auto">
                <img className="storeBadge me-3" src={GooglePlay} alt="" />
                <img className="storeBadge" src={AppStore} alt="" />
              </li>
            </ul>
          </div>
          <div className="stores-lg">
            <img className="storeBadge me-3" src={GooglePlay} alt="" />
            <img className="storeBadge" src={AppStore} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

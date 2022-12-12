import React from "react";
import "./Navbar.scss";

import { AppStoreLogo, GooglePlayLogo, Logo } from "../../global/Svgs";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pb-6">
        <div className="container">
          <Logo></Logo>
          <div className="stores-md ms-auto me-4">
            <label className="storeBadge">
              <div className="d-flex justify-content-center">
                <div className="col-2">
                  <GooglePlayLogo />
                </div>
                <div className="col-8.5 ps-2 d-flex flex-column">
                  <div className="smallBadgeText">GET IT ON</div>
                  <div className="bigBadgeText">Google Play</div>
                </div>
              </div>
            </label>
            <label className="storeBadge">
              <div className="d-flex justify-content-center">
                <div className="col-1.5">
                  <AppStoreLogo />
                </div>
                <div className="col-6.5 ps-2 d-flex flex-column">
                  <div className="smallBadgeText">Download on the</div>
                  <div className="bigBadgeText">App Store</div>
                </div>
              </div>
            </label>
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
            <span className="navbar-toggler-icon"></span>
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
              <li className="stores-sm mx-auto ">
                <label className="storeBadge">
                  <div className="d-flex justify-content-center">
                    <div className="col-2">
                      <GooglePlayLogo />
                    </div>
                    <div className="col-8.5 ps-2 d-flex flex-column">
                      <div className="smallBadgeText">GET IT ON</div>
                      <div className="bigBadgeText">Google Play</div>
                    </div>
                  </div>
                </label>
                <label className="storeBadge">
                  <div className="d-flex justify-content-center">
                    <div className="col-1.5">
                      <AppStoreLogo />
                    </div>
                    <div className="col-6.5 ps-2 d-flex flex-column">
                      <div className="smallBadgeText">Download on the</div>
                      <div className="bigBadgeText">App Store</div>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="stores-lg">
            <label className="storeBadge">
              <div className="d-flex justify-content-center">
                <div className="col-2">
                  <GooglePlayLogo />
                </div>
                <div className="col-8.5 ps-2 d-flex flex-column">
                  <div className="smallBadgeText">GET IT ON</div>
                  <div className="bigBadgeText">Google Play</div>
                </div>
              </div>
            </label>
            <label className="storeBadge">
              <div className="d-flex justify-content-center">
                <div className="col-1.5">
                  <AppStoreLogo />
                </div>
                <div className="col-6.5 ps-2 d-flex flex-column">
                  <div className="smallBadgeText">Download on the</div>
                  <div className="bigBadgeText">App Store</div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

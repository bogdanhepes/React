import React from "react";
import "./Hero03.scss";

import Navbar from "../../../components/navbar/Navbar.js";

import iPhoneScreen from "../../../global/photos/iPhoneScreen.png";
import { WatchVideoLogo } from "../../../global/Svgs";

const Hero03 = () => {
  return (
    <>
      <div className="hero03Container mx-auto">
        <div className="container">
          <Navbar />
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6">
              <h1 className="title">The easiest way to manage projects</h1>
              <div className="someText">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </div>
              <div className="buttonDiv d-flex">
                <button className="btn filledBtn me-3">Get Started</button>
                <button className="btn emptyBtn d-flex align-items-center">
                  <WatchVideoLogo />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="phoneFrame mx-auto">
                <img className="img-fluid" src={iPhoneScreen} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="custom-shape-divider-bottom-1670797282 mt-5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </>
  );
};

export default Hero03;

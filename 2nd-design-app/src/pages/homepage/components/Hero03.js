import React from "react";
import "./Hero03.scss";

import Navbar from "../../../components/navbar/Navbar.js";

import iPhoneScreen from "../../../global/photos/iPhoneScreen.png";
import { WatchVideoLogo, Background } from "../../../global/Svgs";

const Hero03 = () => {
  return (
    <>
      <div className="hero03Container mx-auto">
        <div >
          <Background />
        </div>
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
      </div>
    </>
  );
};

export default Hero03;

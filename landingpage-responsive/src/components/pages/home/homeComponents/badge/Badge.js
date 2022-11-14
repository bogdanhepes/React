import React from "react";

import "./Badge.scss";

import Illustration1 from "../../../../photos/Illustration1.png";

const Badge = () => {
  return (
    <>
      <div className="badgeContainer">
        <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <h1 className="title ">
              Want anything to be easy with{" "}
              <span className="span">LaslesVPN.</span>
            </h1>
            <p className="smallText ">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="span">LaslesVPN</span> discover interesting
              features from us.
            </p>
            <button className="button2 btn btn-danger">Get Started</button>
          </div>
          <div className="col-sm-8 col-lg-6 ">
            <img
              className="d-block mx-lg-auto img-fluid"
              src={Illustration1}
              alt=""
            ></img>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Badge;

import React from "react";
import Illustration1 from "../photos/Illustration1.png";
import "./Content.scss";
import Specs from "./contentComponents/Specs";

const Content = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row ">
          <div className="colLeft col-lg-6 px-4">
            <h1 className="title">
              Want anything to be easy with{" "}
              <span className="titleSpan">LaslesVPN.</span>
            </h1>
            <p className="smallText">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="span">LaslesVPN</span> discover interesting
              features from us.
            </p>
            <button className="button2">Get Started</button>
          </div>
          <div class="colRight col-10 col-sm-8 col-lg-6" >
            <img
              class="d-block mx-lg-auto img-fluid"
              src={Illustration1}
              alt=""
            ></img>
          </div>
        </div>
        <Specs />
      </div>
    </>
  );
};

export default Content;

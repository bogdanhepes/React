import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <div className="subscribeContainer mx-auto">
        <div className="container-fixed ">
          <div className="row d-flex justify-content-between py-5">
            <div className="col">
              <h2 className="bigText">
                Subscribe Now for Get Special Features!
              </h2>
              <p className="smallText">
                Let's subscribe with us and find the fun.
              </p>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <button className="button2 btn btn-danger">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;

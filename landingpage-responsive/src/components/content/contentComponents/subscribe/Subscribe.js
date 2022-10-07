import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <div className="subscribeContainer container-fixed mx-auto">
        <div className="row d-flex justify-content-between py-5">
          <div className="colText col">
            <h2 className="bigText">Subscribe Now for Get Special Features!</h2>
            <p className="smallText">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div className="colButton col py-4 d-flex justify-content-end">
            <button className="button2">Subscribe Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;

import React from "react";
import "./Tools.scss";
const Tools = () => {
  return (
    <>
      <div className="toolContainer">
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-dark">
                <strong>ADD SUBJECT</strong>
                <i className="bi bi-plus-lg ps-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;

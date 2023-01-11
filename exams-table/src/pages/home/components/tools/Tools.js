import React from "react";
import AddModal from "../../../../components/addModal/AddModal";
import "./Tools.scss";
const Tools = () => {
  return (
    <>
      <div className="toolContainer">
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                <strong>ADD SUBJECT</strong>
                <i className="bi bi-plus-lg ps-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddModal />
    </>
  );
};

export default Tools;

import React from "react";

import AddForm from "./addForm/AddForm";

import { submit } from "redux-form";
import { connect, useDispatch } from "react-redux";

const AddModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">ADD A SUBJECT</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-dark"
                onClick={() => dispatch(submit("addSubject"))}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(AddModal);

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import SignUpFormik from "./signUpModalComponents/SignUpFormik";

const SignUpModal = () => {
  const { isLoading } = useSelector((state) => state.users);

  useEffect(() => console.log(isLoading), []);

  return (
    <>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signUpModalLabel">
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              {isLoading ? (
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <SignUpFormik />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;

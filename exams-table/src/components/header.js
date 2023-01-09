import React from "react";
import "./header.scss"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <i className="bi bi-table navbar-brand text-light"></i>
          <strong className="navbar-brand text-light">ExamsTable</strong>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-5 mb-2 mb-lg-0">
              <strong className="nav-item">
                <div className="nav-link text-light">Home</div>
              </strong>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

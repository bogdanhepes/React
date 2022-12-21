import React from "react";
import "./Footer.scss";

import { Logo } from "../../global/Svgs";

import AppStore from "../../global/photos/AppStore.png";
import GooglePlay from "../../global/photos/GooglePlay.png";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Logo />
              <div className="footerActions d-flex pt-4">
                <div className="me-3">Download Now</div>
                <div>License</div>
              </div>
              <div className="footerActions d-flex flex-wrap pt-3">
                <div className="me-3">About</div>
                <div className="me-3">Features</div>
                <div className="me-3">Pricing</div>
                <div className="me-3">News</div>
                <div className="me-3">Help</div>
                <div>Contact</div>
              </div>
              <div className="credits pt-4">
                © 2021 Landify UI Kit. All rights reserved
              </div>
            </div>
            <div className="col-6 col-xs-2 col-sm-3 col-md-3 col-lg-2">
              <div className="getTheApp">Get the App</div>
              <img className="storeBadge mb-3" src={GooglePlay} alt="" />
              <img className="storeBadge" src={AppStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

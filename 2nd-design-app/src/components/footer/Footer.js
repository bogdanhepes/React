import React from "react";
import { AppStoreLogo, GooglePlayLogo, Logo } from "../../global/Svgs";
import "./Footer.scss";
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
              <label className="storeBadge me-2">
                <div className="d-flex justify-content-center">
                  <div className="col-2">
                    <GooglePlayLogo />
                  </div>
                  <div className="col-8.5 ps-2 d-flex flex-column">
                    <div className="smallBadgeText">GET IT ON</div>
                    <div className="bigBadgeText">Google Play</div>
                  </div>
                </div>
              </label>
              <label className="storeBadge">
                <div className="d-flex justify-content-center">
                  <div className="col-1.5">
                    <AppStoreLogo />
                  </div>
                  <div className="col-6.5 ps-2 d-flex flex-column">
                    <div className="smallBadgeText">Download on the</div>
                    <div className="bigBadgeText">App Store</div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

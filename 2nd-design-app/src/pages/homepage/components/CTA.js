import React from "react";
import "./CTA.scss";

import { AppStoreLogo, GooglePlayLogo } from "../../../global/Svgs";

import CTAiPhoneXScreen1 from "../../../global/photos/CTAiPhoneXScreen1.png";
import CTAiPhoneXScreen2 from "../../../global/photos/CTAiPhoneXScreen2.png";

const CTA = () => {
  return (
    <>
      <div className="CTAContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="sectionTitle">
                Manage all projects from your mobile
              </h1>
              <div className="sectionSubtitle">
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </div>
              <div className="getTheApp">Get the App</div>
              <div className="stores">
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
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="phoneFrameLeft mx-auto">
                    <img
                      className="img-fluid"
                      src={CTAiPhoneXScreen1}
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="phoneFrameRight mx-auto">
                    <img
                      className="img-fluid"
                      src={CTAiPhoneXScreen2}
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;

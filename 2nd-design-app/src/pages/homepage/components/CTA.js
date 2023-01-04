import React from "react";
import "./CTA.scss";

import CTAiPhoneXScreen1 from "../../../global/photos/CTAiPhoneXScreen1.png";
import CTAiPhoneXScreen2 from "../../../global/photos/CTAiPhoneXScreen2.png";
import AppStore from "../../../global/photos/AppStore.png";
import GooglePlay from "../../../global/photos/GooglePlay.png";

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
                <img className="storeBadge me-3" src={GooglePlay} alt="" />
                <img className="storeBadge" src={AppStore} alt="" />
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

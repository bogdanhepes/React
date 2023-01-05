import React from "react";
import "./LogoClouds02.scss";

import Intercom from "../../../global/photos/Intercom.png";
import Slack from "../../../global/photos/Slack.png";
import Loom from "../../../global/photos/Loom.png";
import SurveyMonkey from "../../../global/photos/SurveyMonkey.png";
import Dropbox from "../../../global/photos/Dropbox.png";
import Mailchimp from "../../../global/photos/Mailchimp.png";
import Razorpay from "../../../global/photos/Razorpay.png";

const LogoClouds02 = () => {
  return (
    <>
      <div className="logoClouds02Container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h2 className="sectionTitle">
                Easy integrations with 170+ tools
              </h2>
              <div className="sectionSubtitle">
                Connect Landify with your favourite tools that you use daily and
                keep things on track.
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="right">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <svg viewBox="0 0 420 270" className="svgContent">
                      <path d="M0,0 a1,1 0 0,0 420,0" fill="#EDE9FE" />
                    </svg>
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Intercom} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Slack} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Loom} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={SurveyMonkey} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Dropbox} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Mailchimp} alt="" />
                  </div>
                  <div className="col-3">
                    <img className="img-fluid" src={Razorpay} alt="" />
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

export default LogoClouds02;

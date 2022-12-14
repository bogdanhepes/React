import React from "react";
import "./LogoClouds01.scss";

import {
  AirbnbLogo,
  FedexLogo,
  GoogleLogo,
  HubspotLogo,
  MicrosoftLogo,
  WalmartLogo,
} from "../../../global/Svgs";
const LogoClouds01 = () => {
  return (
    <>
      <div className="logoClouds01Container">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <AirbnbLogo />
            </div>
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <HubspotLogo />
            </div>
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <GoogleLogo />
            </div>
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <MicrosoftLogo />
            </div>
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <WalmartLogo />
            </div>
            <div className="col-lg-2 col-sm-3 col-6 text-center">
              <FedexLogo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoClouds01;

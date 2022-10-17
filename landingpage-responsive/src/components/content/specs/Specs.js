import React from "react";
import {
  CheckFull,
  LocationIcon,
  ServerIcon,
  UserIcon,
} from "../../global/SvgComponents";

import Illustration2 from "../../photos/Illustration2.png";

import "./Specs.scss";
const Specs = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-auto">
          <div className="specsContainer ">
            <div className="container-fixed ">
              <div className="row d-flex align-items-center">
                <div className="col justify-content-center">
                  <div className="col-lg-3">
                    <UserIcon />
                  </div>
                  <div className="col-lg-3">
                    <p className="number">90+</p>
                    <p className="text">Users</p>
                  </div>
                </div>
                <div
                  className="col justify-content-center"
                  style={{
                    borderLeft: "solid",
                    borderRight: "solid",
                    borderColor: "#EEEFF2",
                    borderWidth: 2,
                  }}
                >
                  <div className="col-3">
                    <LocationIcon />
                  </div>
                  <div className="col-3">
                    <p className="number">30+</p>
                    <p className="text">Locations</p>
                  </div>
                </div>
                <div className="col justify-content-center">
                  <div className="col-3 ">
                    <ServerIcon />
                  </div>
                  <div className="col-3">
                    <p className="number">50+</p>
                    <p className="text">Servers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 col-lg-6 ">
            <img
              className="d-block mx-lg-auto img-fluid"
              src={Illustration2}
              alt=""
            ></img>
          </div>
          <div className="col-lg-6 py-5 px-5">
            <h2 className="bigText">We Provide Many Features You Can Use</h2>
            <p className="smallText">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="featureList px-0">
              <li className="d-flex ">
                <CheckFull />
                <p className="listText">Powerfull online protection.</p>
              </li>
              <li className="d-flex">
                <CheckFull />
                <p className="listText">Internet without borders.</p>
              </li>
              <li className="d-flex ">
                <CheckFull />
                <p className="listText">Supercharged VPN.</p>
              </li>
              <li className="d-flex">
                <CheckFull />
                <p className="listText">No specific time limits..</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specs;

import React from "react";
import "./Metrics.scss";
import {
  ClientsIcon,
  CountriesIcon,
  DownloadsIcon,
  UsersIcon,
} from "../../../global/Svgs";
const Metrics = () => {
  return (
    <>
      <div className="metricsContainer">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 h-100 my-auto">
              <h2 className="sectionTitle">Our 18 years of achievements</h2>
              <div className="sectionSubtitle">
                With our super powers we have reached this
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-sm-6 d-flex up">
                  <div className="symbol d-flex align-items-center">
                    <DownloadsIcon />
                  </div>
                  <div className="content">
                    <div className="metricValue">10,000+</div>
                    <div className="metricType">Downloads per day</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 d-flex up">
                  <div className="symbol d-flex align-items-center">
                    <UsersIcon />
                  </div>
                  <div className="content">
                    <div className="metricValue">2 Million</div>
                    <div className="metricType">Users</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 d-flex">
                  <div className="symbol d-flex align-items-center">
                    <ClientsIcon />
                  </div>
                  <div className="content">
                    <div className="metricValue">500+</div>
                    <div className="metricType">Clients</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 d-flex">
                  <div className="symbol d-flex align-items-center">
                    <CountriesIcon />
                  </div>
                  <div className="content">
                    <div className="metricValue">140</div>
                    <div className="metricType">Countries</div>
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

export default Metrics;

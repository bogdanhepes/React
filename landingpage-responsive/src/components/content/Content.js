import React from "react";

import "./Content.scss";

import Illustration1 from "../photos/Illustration1.png";
import Illustration2 from "../photos/Illustration2.png";

import Plans from "./contentComponents/plans/Plans";
import Specs from "./contentComponents/specs/Specs";
import Subscribe from "./contentComponents/subscribe/Subscribe";
import Sponsors from "./contentComponents/sponsors/Sponsors";
import Slider from "./contentComponents/slider/Slider";

const Content = () => {
  return (
    <>
      <div className="contentContainer container-fluid ">
        <div className="row1 row">
          <div className="colLeft col-lg-6 px-4">
            <h1 className="title ">
              Want anything to be easy with{" "}
              <span className="titleSpan">LaslesVPN.</span>
            </h1>
            <p className="smallText ">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="span">LaslesVPN</span> discover interesting
              features from us.
            </p>
            <button className="button2">Get Started</button>
          </div>
          <div className="colRight col-10 col-sm-8 col-lg-6">
            <img
              className="d-block mx-lg-auto img-fluid"
              src={Illustration1}
              alt=""
            ></img>
          </div>
        </div>
        <Specs />
        <div className="row2 row ">
          <div className="col col-10 col-sm-8 col-lg-6 ">
            <img
              className="d-block mx-lg-auto img-fluid"
              src={Illustration2}
              alt=""
            ></img>
          </div>
          <div className="colLeft col-lg-6 px-4">
            <h2 className="bigText">We Provide Many Features You Can Use</h2>
            <p className="smallText">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="featureList px-0">
              <li className="d-flex">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 16.5 }}
                >
                  <path
                    d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p className="listText">Powerfull online protection.</p>
              </li>
              <li className="d-flex">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 16.5 }}
                >
                  <path
                    d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p className="listText">Internet without borders.</p>
              </li>
              <li className="d-flex ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 16.5 }}
                >
                  <path
                    d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p className="listText">Supercharged VPN.</p>
              </li>
              <li className="d-flex">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 16.5 }}
                >
                  <path
                    d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p className="listText">No specific time limits..</p>
              </li>
            </ul>
          </div>
        </div>
        <Plans />
        <div className="row3 row ">
          <Sponsors />
        </div>
        <div className="row4 row flex-column justify-content-center">
          <h2 className="bigText">Trusted by Thousands of Happy Customer</h2>
          <p className="smallText">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="row">
          <Slider />
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default Content;

import React from "react";
import { BigQuoteMark } from "../../../global/Svgs";
import "./Testimonial.scss";
import Card from "./TestimonialComponents/Card";
const Testimonial = () => {
  return (
    <>
      <div className="testimonialContainer">
        <div className="container">
          <div className="quoteMark">
            <BigQuoteMark />
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-6">
              <h2 className="sectionTitle">Real Stories from Real Customers</h2>
              <div className="sectionSubtitle">
                Get inspired by these stories.
              </div>
            </div>
            <div className="col-12 col-lg-4 pt-5 pb-4">
              <Card id="1" />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-3 left pb-4">
              <Card id="2" />
            </div>
            <div className="col-12 col-lg-3 right">
              <Card id="3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

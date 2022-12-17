import React from "react";
import {
  BetterComponentsIcon,
  FlexibilityIcon,
  MultipleLayoutsIcon,
  RobustWorkflowIcon,
  UserFriendlyIcon,
  WellOrganizedIcon,
} from "../../../global/Svgs";
import "./Features.scss";
const Features = () => {
  return (
    <>
      <div className="featuresContainer">
        <div className="container text-center">
          <h2 className="sectionTitle mx-auto">Tailor-made features</h2>
          <div className="sectionSubtitle mx-auto">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <RobustWorkflowIcon />
              <h3 className="featureTitle">Robust workflow</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <FlexibilityIcon />
              <h3 className="featureTitle">Flexibility</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>{" "}
            <div className="col-12 col-sm-6 col-lg-4">
              <UserFriendlyIcon />
              <h3 className="featureTitle">User friendly</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>{" "}
            <div className="col-12 col-sm-6 col-lg-4">
              <MultipleLayoutsIcon />
              <h3 className="featureTitle">Multiple layouts</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>{" "}
            <div className="col-12 col-sm-6 col-lg-4">
              <BetterComponentsIcon />
              <h3 className="featureTitle">Better components</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>{" "}
            <div className="col-12 col-sm-6 col-lg-4">
              <WellOrganizedIcon />
              <h3 className="featureTitle">Well organised</h3>
              <div className="featureText mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

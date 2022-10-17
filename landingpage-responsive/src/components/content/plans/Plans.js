import React from "react";
import "./Plans.scss";

import PlansCard from "./plansComponents/plansCard/PlansCard";

const Plans = () => {
  return (
    <>
      <div className="plansContainer ">
        <div className="container-fluid">
          <div className="row flex-column">
            <div className="col d-flex flex-column text-center">
              <h2 className="bigText">Choose Your Plan</h2>
              <p className="smallText">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
            <div className="col">
              <PlansCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;

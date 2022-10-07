import React from "react";
import "./Plans.scss";

import PlansCard from "./plansComponents/plansCard/PlansCard";

const Plans = () => {
  return (
    <>
      <div className="plansContainer container-fluid">
        <div className="row flex-column">
          <div className="col1 col d-flex flex-column ">
            <h2 className="bigText">Choose Your Plan</h2>
            <p className="smallText">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <PlansCard />
          <div className="col2 col d-flex flex-column justify-content-center">
            <h2 className="bigText ">Huge Global Network of Fast VPN</h2>

            <p className="smallText">
              See <span className="span">LaslesVPN</span> everywhere to make it
              easier for you when you move locations.
            </p>

            <div style={{ fontWeight: "bold" }}>harta</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;

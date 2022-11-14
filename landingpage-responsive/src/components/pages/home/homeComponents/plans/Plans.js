import React from "react";
import "./Plans.scss";

import Free from "../../../../photos/Free.png";
import Standard from "../../../../photos/Standard.png";
import Premium from "../../../../photos/Premium.png";

import PlansCard from "./plansComponents/plansCard/PlansCard";

const Plans = () => {
  const plans = {
    photos: [Free, Standard, Premium],
    names: ["Free Plan", "Standard Plan", "Premium Plan"],
    lists: [
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
    ],
    prices: ["Free", "$9 / mo", "$12 / mo"],
  };
  return (
    <>
      <div className="plansContainer">
        <div className="container">
          <div className="row flex-column">
            <div className="col d-flex flex-column text-center">
              <h2 className="bigText">Choose Your Plan</h2>
              <p className="smallText">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
            <div className="col d-flex flex-wrap justify-content-evenly ">
              {plans.photos.map((el, index) => {
                return (
                  <PlansCard
                    photo={plans.photos[index]}
                    name={plans.names[index]}
                    list={plans.lists[index]}
                    price={plans.prices[index]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;

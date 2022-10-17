import React from "react";
import "./PlansCard.scss";
import Free from "../../../../photos/Free.png";
import { CheckEmpty } from "../../../../global/SvgComponents";
const PlansCard = () => {
  return (
    <>
      <div className="cardContainer flex-wrap d-flex justify-content-evenly">
        <div className="planCard card">
          <div className="container">
            <div className="row flex-column text-center">
              <div className="col">
                <img className="img-fluid" src={Free} alt="" />
                <p className="planName">Free Plan</p>
              </div>
              <div className="col">
                <ul className="plansCardList ">
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Encrypted Connection
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      No Traffic Logs
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Works on All Devices
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <p className="planPrice">
                  <span className="span">Free</span>
                </p>
                <button className="button1">Select</button>
              </div>
            </div>
          </div>
        </div>
        <div className="planCard card">
          <div className="container">
            <div className="row flex-column text-center">
              <div className="col">
                <img className="img-fluid" src={Free} alt="" />
                <p className="planName">Free Plan</p>
              </div>
              <div className="col">
                <ul className="plansCardList ">
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Encrypted Connection
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      No Traffic Logs
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Works on All Devices
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <p className="planPrice">
                  <span className="span">Free</span>
                </p>
                <button className="button1">Select</button>
              </div>
            </div>
          </div>
        </div>
        <div className="planCard card">
          <div className="container">
            <div className="row flex-column text-center">
              <div className="col">
                <img className="img-fluid" src={Free} alt="" />
                <p className="planName">Free Plan</p>
              </div>
              <div className="col">
                <ul className="plansCardList ">
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Encrypted Connection
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      No Traffic Logs
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Works on All Devices
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <p className="planPrice">
                  <span className="span">Free</span>
                </p>
                <button className="button1">Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansCard;

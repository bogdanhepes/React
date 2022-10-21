import React from "react";
import "./PlansCard.scss";
import Free from "../../../../photos/Free.png";
import Standard from "../../../../photos/Standard.png";
import Premium from "../../../../photos/Premium.png";
import { CheckEmpty } from "../../../../global/SvgComponents";
const PlansCard = () => {
  return (
    <>
      <div className="cardContainer flex-wrap d-flex justify-content-evenly">
        <div className="planCard card">
          <div className="container">
            <div className="row flex-column text-center d-flex justify-content-end">
              <div className="col py-5">
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
              <div className="col py-5">
                <img className="img-fluid" src={Standard} alt="" />
                <p className="planName">Standard Plan</p>
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
                      Yes Traffic Logs
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Works on All Devices
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Connect Anywhere
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <p className="planPrice">
                  <span className="span">$9 </span>
                  / mo
                </p>
                <button className="button1">Select</button>
              </div>
            </div>
          </div>
        </div>
        <div className="planCard card">
          <div className="container">
            <div className="row flex-column text-center">
              <div className="col py-5">
                <img className="img-fluid" src={Premium} alt="" />
                <p className="planName">Premium Plan</p>
              </div>
              <div className="col">
                <ul className="plansCardList p-0">
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
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Connect Anywhere
                    </p>
                  </li>
                  <li className="d-flex">
                    <CheckEmpty />
                    <p className="listText d-flex justify-content-start">
                      Get New Features
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <p className="planPrice">
                  <span className="span">$12 </span>/ mo
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

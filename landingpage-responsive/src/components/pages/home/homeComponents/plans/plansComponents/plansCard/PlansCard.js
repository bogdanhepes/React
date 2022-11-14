import React from "react";
import "./PlansCard.scss";

import { CheckEmpty } from "../../../../../../global/SvgComponents";
const PlansCard = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="planCard card ">
          <div className="container ">
            <div className="row flex-column text-center ">
              <div className="col">
                <img className="img-fluid" src={props.photo} alt="" />
                <p className="planName">{props.name}</p>
              </div>
              <div className="col">
                <ul className="plansCardList ">
                  {props.list.map((el) => {
                    return (
                      <li className="d-flex">
                        <CheckEmpty />
                        <p className="listText d-flex justify-content-start">
                          {el}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="card-footer text-center p-0">
            <p className="planPrice">
              <span className="span">{props.price}</span>
            </p>
            <button className="button1 btn btn-outline-danger">Select</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default PlansCard;

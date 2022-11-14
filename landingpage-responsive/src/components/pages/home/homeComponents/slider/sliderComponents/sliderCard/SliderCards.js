import React from "react";
import { Star } from "../../../../../../global/SvgComponents";

import "./SliderCards.scss";
const SliderCards = (props) => {
  return (
    <>
      <div className="sliderCardsContainer">
        <div className="container">
          <div className="row d-flex">
            {props.customers.ratings.map((el, index) => {
              return (
                <div className="col ">
                  <div className="sliderCard card">
                    <div className="container p-4 ">
                      <div className="row d-flex justify-content-between ">
                        <div className="col-8 d-flex">
                          <img className="img-fluid" src={props.customers.photos[index]} alt="" />
                          <div>
                            <p className="listTitle">{props.customers.names[index]}</p>
                            <p className="listText">{props.customers.locations[index]}</p>
                          </div>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <p className="smallText">{el}</p>
                          <Star />
                        </div>
                      </div>
                      <div className="rowMessage row">
                        <p className="smallText">{props.customers.messages[index]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCards;

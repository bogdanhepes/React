import React from "react";
import { CartEmptyBig } from "../../../global/SvgComponents";
import FeaturesCard from "./featuresCard/FeaturesCard";

import "./FeaturesContainer.scss";
const FeaturesContainer = (props) => {
    
  return (
    <>
      <div className="featuresContainer">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col col-lg-3 col-sm-3 d-flex">
              <button className="button1">View Cart</button>
              <div className="my-auto d-flex">
                <CartEmptyBig />
              </div>
            </div>
            <div className="col col-lg-2 col-sm-3">
              <h3>Items count: {props.products?.length}</h3>
            </div>
          </div>
          <div className="row d-flex flex-wrap pt-5">
            {props?.products?.map((el) => {
              return (
                <div className="col-lg-3 my-3">
                  <FeaturesCard product={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesContainer;

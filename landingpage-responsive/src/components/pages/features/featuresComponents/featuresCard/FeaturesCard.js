import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../../redux/actions/products";
import { CartEmpty, CartFull } from "../../../../global/SvgComponents";
import "./FeaturesCard.scss";
const FeaturesCard = (props) => {
  const dispatch = useDispatch();
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isDetailsClicked, setIsDetailsClicked] = useState(false);

  const handleDelete = () => {
    try {
      dispatch(deleteProduct(props.product.id));
    } catch (error) {}
  };
  return (
    <>
      <div className="featuresCardContainer h-100">
        <div className="container h-100">
          <div className="card h-100">
            {!isDetailsClicked ? (
              <div className="h-100">
                <div className="card-header h-100 d-flex ">
                  <i className="bi bi-pencil-fill text-dark p-2"></i>
                  <img
                    src={props.product.image}
                    className="img-fluid m-auto"
                    alt="..."
                  />
                  <i
                    className="bi bi-trash3-fill text-dark p-2"
                    onClick={handleDelete()}
                  ></i>
                </div>
                <div className="card-body h-100">
                  <h5 className="card-title">{props.product.title}</h5>
                  <p className="card-text">{props.product.price}$</p>
                </div>
              </div>
            ) : (
              <h5 className="description h-100 p-3">
                {props.product.description}
              </h5>
            )}
            <div className="card-footer d-flex justify-content-between">
              <button
                className="button1"
                onClick={() => {
                  setIsDetailsClicked(!isDetailsClicked);
                }}
              >
                More Details
              </button>
              <div
                className="cart my-auto"
                onClick={() => {
                  setIsCartClicked(!isCartClicked);
                }}
              >
                {!isCartClicked ? <CartEmpty /> : <CartFull />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;

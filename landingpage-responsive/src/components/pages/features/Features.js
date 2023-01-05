import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/products";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import FeaturesContainer from "./featuresComponents/FeaturesContainer";

const Features = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      dispatch(getProducts());
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    // eslint-disable-next-line
  }, []);

  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Header />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-dark" role="status"></div>
        </div>
      ) : (
        <FeaturesContainer products={products} />
      )}
      <Footer />
    </>
  );
};

export default Features;

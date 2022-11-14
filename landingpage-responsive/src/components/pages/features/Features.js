import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/products/ProductsActions";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import FeaturesContainer from "./featuresComponents/FeaturesContainer";

const Features = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state);

  return (
    <>
      <Header />
      <FeaturesContainer products={products} />
      <Footer />
    </>
  );
};

export default Features;

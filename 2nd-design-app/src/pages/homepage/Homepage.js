import React from "react";
import Footer from "../../components/footer/Footer";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero03 from "./components/Hero03";
import LogoClouds01 from "./components/LogoClouds01";
import LogoClouds02 from "./components/LogoClouds02";
import Metrics from "./components/Metrics";
import Testimonial from "./components/Testimonial";
const Homepage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Hero03 />
        <LogoClouds01 />
        <Features />
        <Testimonial />
        <Metrics />
        <LogoClouds02 />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

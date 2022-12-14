import React from "react";
import Features from "./components/Features";
import Hero03 from "./components/Hero03";
import LogoClouds01 from "./components/LogoClouds01";
const Homepage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Hero03 />
        <LogoClouds01 />
        <Features />
      </div>
    </>
  );
};

export default Homepage;

import React from "react";

import Header from "../../header/Header";
import Badge from "./homeComponents/badge/Badge";
import Specs from "./homeComponents/specs/Specs";
import Plans from "./homeComponents/plans/Plans";
import Map from "./homeComponents/map/Map";
import Sponsors from "./homeComponents/sponsors/Sponsors";
import Slider from "./homeComponents/slider/Slider";
import Subscribe from "./homeComponents/subscribe/Subscribe";
import Footer from "../../footer/Footer";





const Home = () => {



  return (
    <>
      <div className="container-fluid">
        <Header/>
        <Badge/>
        <Specs />
        <Plans />
        <Map />
        <Sponsors />
        <Slider />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;

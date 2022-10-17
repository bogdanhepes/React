import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/header/Header";
import Badge from "./components/content/badge/Badge";
import Subscribe from "./components/content/subscribe/Subscribe";
import Slider from "./components/content/slider/Slider";
import Sponsors from "./components/content/sponsors/Sponsors";
import Plans from "./components/content/plans/Plans";
import Specs from "./components/content/specs/Specs";
import Footer from "./components/footer/Footer";
import Map from "./components/content/map/Map";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Badge />
        <Specs />
        <Plans />
        <Map/>
        <Sponsors />
        <Slider />
        <Subscribe />
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#F8F8F8" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Features from "./components/pages/features/Features";
import Pricing from "./components/pages/pricing/Pricing";
import Testimonials from "./components/pages/testimonials/Testimonials";
import Help from "./components/pages/help/Help";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Testimonials" element={<Testimonials/>}/>
          <Route path="/Help" element={<Help/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

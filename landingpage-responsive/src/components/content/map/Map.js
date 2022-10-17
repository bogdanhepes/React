import React from "react";
import "./Map.scss";

import MapComponent from "./components/MapComponent";
const Map = () => {
  return (
    <>
      <div className="mapContainer">
        <div className="container">
          <div className="row flex-column">
            <div className="col d-flex flex-column text-center">
              <h2 className="bigText ">Huge Global Network of Fast VPN</h2>
              <p className="smallText">
                See <span className="span">LaslesVPN</span> everywhere to make
                it easier for you when you move locations.
              </p>
            </div>
            <div className="col">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

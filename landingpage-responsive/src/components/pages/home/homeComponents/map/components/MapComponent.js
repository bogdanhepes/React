import React, { useEffect, useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { csv } from "d3-fetch";
import sortBy from "lodash/sortBy";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const MapComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("/data.csv").then((cities) => {
      const sortedCities = sortBy(cities, (o) => -o.population);
      setData(sortedCities);
    });
  }, []);

  return (
    <div className="container">
      <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
            ))
          }
        </Geographies>
        {data.map((el) => {
          return (
            <Marker key={el.city_code} coordinates={[el.lng, el.lat]}>
              <circle key={el.rank} fill="#F53" r={7} />
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default MapComponent;

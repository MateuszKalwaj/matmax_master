import React, { useEffect } from "react";
import {createMap} from "../../utils/MapSetup";

const Map = () => {
    useEffect(() => {
        createMap();
    });
  return <div className="map-container col-12 col-sm-6 col-lg-8 align-self-center mb-4 mb-sm-0" id="map"></div>
};

export default Map;

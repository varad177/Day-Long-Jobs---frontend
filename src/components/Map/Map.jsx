import React from "react";

import {  TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {


    // const { latitude, longitude, zoom } = this.props; // Pass these props from your parent component

  return (
    <Map
      center={[19.2354958, 73.0877244]}
      zoom={ 10}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[19.2354958,  73.0877244]}>
        <Popup>Your location</Popup>
      </Marker>
    </Map>
  );
};

export default Map;

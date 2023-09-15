"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const MapContact = () => {
    const mapContainerStyle = {
        width: "100%",
        height: "100%",
        saturation: -100,
      };
    
      const center = {
        lat: -34.397,
        lng: 150.644,
      };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

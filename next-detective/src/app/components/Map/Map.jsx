"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import style from "./map.module.scss";
import Link from "next/link";
import Image from "next/image";
import Vectorright from "../../../../public/vectorright.svg";

export default function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
    saturation: -100,
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };
  return (
    <>
      <section className={style.container}>
        <div className={style.blok}>
          <h3 className={style.h3}>Где мы находимся?</h3>
          <Link href="/contacts">
            <button type="submit" className={style.button}>
              Все контакты
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.vector}
              />
            </button>
          </Link>
        </div>

        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </section>
    </>
  );
}

"use client";
import React from "react";
import style from "./map.module.scss";
import Link from "next/link";
import Image from "next/image";
import Vectorright from "../../../../public/vectorright.svg";

export default function Map() {
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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.0074724233007!2d37.6659021542763!3d55.74585413138761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54aea4615b66d%3A0xfdd927b8ff05ae5e!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0KHQvtC70LbQtdC90LjRhtGL0L3QsCwgNDI!5e0!3m2!1sru!2sru!4v1694005383491!5m2!1sru!2sru"
          style={{
            width: "100%",
            height: "600px",
            border: "0px",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </section>
    </>
  );
}

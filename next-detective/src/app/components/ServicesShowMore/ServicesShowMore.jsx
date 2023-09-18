"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./servicesshowmore.module.scss";

export const ServicesShowMore = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {showMore && (
              <div>
                <Link href="/">
                  <p className={style.text}>Поиск родственников ВОВ</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Розыск несовершеннолетних</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Розыск имущества наследователя</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск пропавших родственников</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>
                    Поиск людей по электронному адесу
                  </p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск родственников в Израиле</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Розыск людей по телефону</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск имущества в банкротстве</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск родственников по ДНК</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск человека по IP</p>
                </Link>
                <Link href="/">
                  <p className={style.text}>Поиск биологических родителей</p>
                </Link>
              </div>
            )}
            <button onClick={handleShowMore} className={style.button}>
              {showMore ? "Скрыть" : "Ещё 11"}
            </button>
    </>
  );
};

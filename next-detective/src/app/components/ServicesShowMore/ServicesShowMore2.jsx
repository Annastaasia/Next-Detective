"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./servicesshowmore.module.scss";

export const ServicesShowMore2 = () => {
  const [showMore2, setShowMore2] = useState(false);

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <>
      {showMore2 && (
        <div>
          <Link href="/">
            <p className={style.text}>Проверка кредитной истории</p>
          </Link>
          <Link href="/">
            <p className={style.text}>Проверка кредитной истории</p>
          </Link>
        </div>
      )}
      <button onClick={handleShowMore2} className={style.button}>
        {showMore2 ? "Скрыть" : "Ещё 2"}
      </button>
    </>
  );
};

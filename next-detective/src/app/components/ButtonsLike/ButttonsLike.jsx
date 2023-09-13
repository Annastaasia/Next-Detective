"use client";
import React, { useState } from "react";
import style from "./buttonslike.module.scss";
import Image from "next/image";
import Like from "../../../../public/article-like.svg";
import Dislike from "../../../../public/article-dislike.svg";

export const ButtonsLike = () => {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  return (
    <div className={style.button_socnet}>
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        className={style.like}
      >
        <Image src={Like} alt="Like" />
        {count}
      </button>
      <button
        onClick={() => setCount2(count2 + 1)}
        type="button"
        className={style.dislike}
      >
        <Image src={Dislike} alt="Dislike" />
        {count2}
      </button>
    </div>
  );
};

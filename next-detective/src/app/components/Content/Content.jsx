"use client";
import React, { useState } from "react";
import style from "./content.module.scss";
import Image from "next/image";
import VectotUp from "../../../../public/article-icon.svg";

export const Content = () => {
  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.blok}>
      <div className={style.row}>
        <h3 className={style.h3}>Содержание</h3>

        <Image
          src={VectotUp}
          alt="VectotUp"
          className={style.large_icon}
          onClick={handleItemClick}
          style={{
            transform: isIconUp ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {showItems && (
        <ol className={style.bloktext}>
          <li onClick={() => scrollToSection("title1")}>Заголовок</li>
          <li onClick={() => scrollToSection("title2")}>Заголовок</li>
          <ol className={style.bloktext}>
            <li onClick={() => scrollToSection("subtitle1")}>Подзаголовок</li>
            <li onClick={() => scrollToSection("subtitle2")}>Подзаголовок</li>
          </ol>
          <li onClick={() => scrollToSection("title3")}>Заголовок</li>
          <li onClick={() => scrollToSection("title4")}>Заголовок</li>
        </ol>
      )}
    </div>
  );
};

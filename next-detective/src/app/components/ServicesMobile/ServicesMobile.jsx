"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./servicesmobile.module.scss";
import Image from "next/image";
import Info from "../../../../public/services-chat.svg";
import Family from "../../../../public/services-family.svg";
import Binoculars from "../../../../public/services-binoculars.svg";
import Search from "../../../../public/services-search.svg";
import Protect from "../../../../public/services-protect.svg";
import Journalism from "../../../../public/services-journalism.svg";
import ArrowDown from "../../../../public/biege_arrow_down.svg";

export const ServicesMobile = () => {
  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  const [showItems2, setShowItems2] = useState(false);
  const [isIconUp2, setIsIconUp2] = useState(false);

  const handleItemClick2 = () => {
    setShowItems2(!showItems2);
    setIsIconUp2(!isIconUp2);
  };

  const [showItems3, setShowItems3] = useState(false);
  const [isIconUp3, setIsIconUp3] = useState(false);

  const handleItemClick3 = () => {
    setShowItems3(!showItems3);
    setIsIconUp3(!isIconUp3);
  };

  const [showItems4, setShowItems4] = useState(false);
  const [isIconUp4, setIsIconUp4] = useState(false);

  const handleItemClick4 = () => {
    setShowItems4(!showItems4);
    setIsIconUp4(!isIconUp4);
  };

  const [showItems5, setShowItems5] = useState(false);
  const [isIconUp5, setIsIconUp5] = useState(false);

  const handleItemClick5 = () => {
    setShowItems5(!showItems5);
    setIsIconUp5(!isIconUp5);
  };

  const [showItems6, setShowItems6] = useState(false);
  const [isIconUp6, setIsIconUp6] = useState(false);

  const handleItemClick6 = () => {
    setShowItems6(!showItems6);
    setIsIconUp6(!isIconUp6);
  };

  return (
    <>
      <section className={style.catalog_mobile}>
        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Info}
                alt="Info"
                className={style.img}
                style={{
                  filter: isIconUp ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Сбор информации</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick}
              style={{
                transform: isIconUp ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Досье на человека</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Компромат на человека</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Организация слежки</p>
              </Link>
              <Link href="/services_for_individuals/geolocation">
                <p className={style.text}>
                  Пробить геолокацию по номеру телефона
                </p>
              </Link>
              <Link href="/">
                <p className={style.text}>Проверка запрета на выезд</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Проверка кредитной истории</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Проверка кредитной истории</p>
              </Link>
            </div>
          )}
        </div>

        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Search}
                alt="Search"
                className={style.img}
                style={{
                  filter: isIconUp2 ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Розыск</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick2}
              style={{
                transform: isIconUp2 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems2 && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Поиск родственников</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Розыск имущества</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Поиск человека по адресу</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Розыск за границей</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Частный розыск</p>
              </Link>
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
                <p className={style.text}>Поиск людей по электронному адесу</p>
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
        </div>

        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Family}
                alt="Family"
                className={style.img}
                style={{
                  filter: isIconUp3 ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Семейные вопросы</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick3}
              style={{
                transform: isIconUp3 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems3 && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Проверка образ жизни детей</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Проверить на верность</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Провокация измен</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Слежка за женой</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Слежка за мужем</p>
              </Link>
            </div>
          )}
        </div>

        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Protect}
                alt="Protect"
                className={style.img}
                style={{
                  filter: isIconUp4 ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Защита</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick4}
              style={{
                transform: isIconUp4 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems4 && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Поиск прослушки в квартире</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Обратиться в СМИ</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Выход из секты</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Помощь и защита при шантаже</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Защита от буллинга</p>
              </Link>
            </div>
          )}
        </div>

        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Binoculars}
                alt="Binoculars"
                className={style.img}
                style={{
                  filter: isIconUp5 ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Расследования</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick5}
              style={{
                transform: isIconUp5 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems5 && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Журналистское расследование</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Расследование убийств</p>
              </Link>
              <Link href="/">
                <p className={style.text}>Расследование мошенничества</p>
              </Link>
            </div>
          )}
        </div>

        <div className={style.blok}>
          <div className={style.row}>
            <div className={style.bloksmall}>
              <Image
                src={Journalism}
                alt="Journalism"
                className={style.img}
                style={{
                  filter: isIconUp6 ? "brightness(0%) saturate(100%)" : "none",
                  transitionDuration: "0.2s",
                }}
              />
              <h2 className={style.h2}>Журналистика</h2>
            </div>
            <Image
              alt="ArrowDown"
              src={ArrowDown}
              onClick={handleItemClick6}
              style={{
                transform: isIconUp6 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          {showItems6 && (
            <div className={style.bloktext}>
              <Link href="/">
                <p className={style.text}>Заказать расследование</p>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

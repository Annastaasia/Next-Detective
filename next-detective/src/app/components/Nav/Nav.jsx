"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Vectordown from "../../../../public/vectordown.svg";
import Vectordown2 from "../../../../public/bxs_chevron-down.svg";
import Vectorright from "../../../../public/bxs_chevron-right.svg";
import styled from "styled-components";
import style from "./nav.module.scss";
import ModalServices from "../../components/ModalServices/ModalServices";
import Phone from "../../../../public/gg_phone.svg";
import Telegram from "../../../../public/telegram.svg";
import WhatsApp from "../../../../public/whatsapp.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 1230px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 88px;
    left: 0;
    right: 0;
    padding: 24px 40px;
    transition: transform 0.3s ease-in-out;
    margin: 0%;
  }

  @media (max-width: 676px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 65px;
    left: 0;
    right: 0;
    padding: 24px 16px;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    transition: transform 0.3s ease-in-out;
    margin: 0%;
  }
`;

const Nav = ({ open, closeMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [isIconModalUp, setIsIconModalUp] = useState(false);

  const handleModalClick = () => {
    setShowModal(!showModal);
    setIsIconModalUp(!isIconModalUp);
  };

  const Check = () => {
    setShowModal();
  };

  return (
    <nav className={style.nav}>
      <div
        className={`${style["menu-background"]} ${open ? style["dark"] : ""}`}
      >
        <Ul open={open}>
          <li className={style.liservices} onClick={handleModalClick}>
            Для частных лиц
            <Image
              src={Vectordown}
              alt="Vectordown"
              style={{
                transform: isIconModalUp ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease",
              }}
              className={style.vector}
            />
          </li>
          {showModal && <ModalServices stateMenu={setShowModal} />}

          <Link href="/services_for_individuals">
            <li
              className={(style.li, style.limob)}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Для частных лиц{" "}
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.right}
              />
            </li>
          </Link>

          <Link href="/">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Для бизнеса
              <Image
                src={Vectordown2}
                alt="Vectordown2"
                className={style.vector}
              />
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.right}
              />
            </li>
          </Link>
          <Link href="/price">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Цены{" "}
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.right}
              />
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Блог{" "}
              <div className={style.right}>
                <Image
                  src={Vectorright}
                  alt="Vectorright"
                  className={style.right}
                />
              </div>
            </li>
          </Link>
          <Link href="/reviews">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Отзывы{" "}
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.right}
              />
            </li>
          </Link>
          <Link href="/contacts">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Контакты{" "}
              <Image
                src={Vectorright}
                alt="Vectorright"
                className={style.right}
              />
            </li>
          </Link>

          <div className={style.navcontainer}>
            <div className={style.container_medium}>
              <Image src={Phone} alt="phone" className={style.phone} />
              <div className={style.container_small}>
                <p className={style.number}>+7 (925) 008-79-01</p>
                <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
            <a
              className={style.a}
              href="https://t.me/pershin_detective"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Telegram} alt="Telegram" className={style.telegram} />
            </a>
            <a
              className={style.a}
              href="https://api.whatsapp.com/send?phone=79686868685&text=Доброго%20времени%20суток!"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={WhatsApp} alt="WhatsApp" className={style.whatsapp} />
            </a>
          </div>
        </Ul>
      </div>
    </nav>
  );
};

export default Nav;

"use client";
import style from "./modalservices.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Info from "../../../../public/services-chat.svg";
import Family from "../../../../public/services-family.svg";
import Binoculars from "../../../../public/services-binoculars.svg";
import Search from "../../../../public/services-search.svg";
import Protect from "../../../../public/services-protect.svg";
import Journalism from "../../../../public/services-journalism.svg";

export default function ModalServices(props) {
  const Check = () => {
    props.stateMenu();
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);
  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <div className={style.catalog}>
      <div>
        <div className={style.catalog_inner}>
          <Scrollbar
            style={{
              width: "93vw",
              height: "33vw",
            }}
          >
            <div className={style.catalog_inner2}>
              <section className={style.blokinfo}>
                <Image src={Info} alt="Info" className={style.img} />
                <h2 className={style.h2}>Сбор информации</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Досье на человека</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Компромат на человека</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Организация слежки</p>
                </Link>
                <Link
                  onClick={() => Check()}
                  href="/services_for_individuals/geolocation"
                >
                  <p className={style.text}>
                    Пробить геолокацию по номеру телефона
                  </p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Проверка запрета на выезд</p>
                </Link>
                {showMore2 && (
                  <div>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Проверка кредитной истории</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Проверка кредитной истории</p>
                    </Link>
                  </div>
                )}
                <button onClick={handleShowMore2} className={style.button}>
                  {showMore2 ? "Скрыть" : "Ещё 2"}
                </button>
              </section>

              <section className={style.blokfamily}>
                <Image src={Family} alt="Family" className={style.img} />
                <h2 className={style.h2}>Семейные вопросы</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Проверка образ жизни детей</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Проверить на верность</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Провокация измен</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Слежка за женой</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Слежка за мужем</p>
                </Link>
              </section>

              <section className={style.blokbinoculars}>
                <Image
                  src={Binoculars}
                  alt="Binoculars"
                  className={style.img}
                />
                <h2 className={style.h2}>Расследования</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Журналистское расследование</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Расследование убийств</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Расследование мошенничества</p>
                </Link>
              </section>

              <section className={style.bloksearch}>
                <Image src={Search} alt="Search" className={style.img} />
                <h2 className={style.h2}>Розыск</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск родственников</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Розыск имущества</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск человека по адресу</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Розыск за границей</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Частный розыск</p>
                </Link>
                {showMore && (
                  <div>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Поиск родственников ВОВ</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Розыск несовершеннолетних</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Розыск имущества наследователя
                      </p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск пропавших родственников
                      </p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск людей по электронному адесу
                      </p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск родственников в Израиле
                      </p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Розыск людей по телефону</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск имущества в банкротстве
                      </p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Поиск родственников по ДНК</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>Поиск человека по IP</p>
                    </Link>
                    <Link href="/" onClick={() => Check()}>
                      <p className={style.text}>
                        Поиск биологических родителей
                      </p>
                    </Link>
                  </div>
                )}
                <button onClick={handleShowMore} className={style.button}>
                  {showMore ? "Скрыть" : "Ещё 11"}
                </button>
              </section>

              <section className={style.blokprotect}>
                <Image src={Protect} alt="Protect" className={style.img} />
                <h2 className={style.h2}>Защита</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Поиск прослушки в квартире</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Обратиться в СМИ</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Выход из секты</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Помощь и защита при шантаже</p>
                </Link>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Защита от буллинга</p>
                </Link>
              </section>

              <section className={style.blokjournalism}>
                <Image
                  src={Journalism}
                  alt="Journalism"
                  className={style.img}
                />
                <h2 className={style.h2}>Журналистика</h2>
                <Link href="/" onClick={() => Check()}>
                  <p className={style.text}>Заказать расследование</p>
                </Link>
              </section>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
}

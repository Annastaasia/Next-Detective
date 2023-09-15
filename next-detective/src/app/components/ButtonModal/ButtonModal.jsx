"use client";
import React, { useState } from "react";
import Popup from "../Popup/Popup";
import SecondModal from "../SecondModal/SecondModal";
import style from "./buttonmodal.module.scss";
import Image from "next/image";
import VectorRight from "../../../../public/vectorright.svg";

export const ButtonModal = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SecondModal HowToReachUs={true} />
      </Popup>

      <button
        onClick={() => setButtonPopup(true)}
        className={style.button_buy}
        type="button"
      >
        Заказать услугу
        <Image
          src={VectorRight}
          alt="vector"
          className={style.icon}
          width={24}
          height={24}
        />
      </button>
    </>
  );
};

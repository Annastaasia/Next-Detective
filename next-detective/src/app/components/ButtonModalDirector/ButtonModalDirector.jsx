"use client";
import React, { useState } from "react";
import style from "./buttonmodaldirector.module.scss";
import Image from "next/image";
import Vectorright from "../../../../public/vectorright.svg";
import Popup from "../Popup/Popup";
import SecondModal from "../SecondModal/SecondModal";

export const ButtonModalDirector = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SecondModal HowToReachUs={true} />
      </Popup>
      <button
        type="submit"
        className={style.button}
        onClick={() => setButtonPopup(true)}
      >
        Записаться на консультацию
        <Image src={Vectorright} alt="Vectorright" className={style.vector} />
      </button>
    </>
  );
};

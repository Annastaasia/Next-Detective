"use client";
import React, { useState } from "react";
import style from "./buttonmodalmain.module.scss";
import Image from "next/image";
import Vectorright from "../../../../public/Vectorright.jsx";
import Popup from "../Popup/Popup";
import SecondModal from "../SecondModal/SecondModal";

export const ButtonModalMain = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <button
        type="submit"
        className={style.button}
        onClick={() => setButtonPopup(true)}
      >
        Оставить заявку
        <div className={style.vector}>
          <Image src={Vectorright} alt="Vectorright" />
        </div>
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SecondModal isMainMobile={true} />
      </Popup>
    </>
  );
};

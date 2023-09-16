"use client";
// import Image from "next/image";
import style from "./mainbg.module.scss";
import SecondModal from "../SecondModal/SecondModal";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
import { ButtonModalMain } from "../ButtinModalMain/ButtonModalMain";

export default function MainBG() {
  return (
    <>
      <section className={style.background}>
        <div className={style.container}>
          <h1 className={style.h1}>perhin & partners</h1>
          <h2 className={style.h2}>детективное агентство в москве</h2>

          <SecondModal isOnMain={true}></SecondModal>

          <SocialMediaButtons />
        </div>
      </section>
      <div className={style.button_mobile}>
        <ButtonModalMain />
        {/* <button
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
        </Popup> */}
      </div>
    </>
  );
}

import style from "./popup.module.scss";
import Image from "next/image";
import Cross from "../../../../public/icon-white-cross.svg";
import Link from "next/link";
import Logo from "../../../../public/logo.svg";

export default function Popup(props) {
  const checkOnGrey = (e) => {
    return e.target.className === style.popup ? props.setTrigger(false) : "";
  };

  return props.trigger ? (
    <>
      <div className={style.popup} onClick={(e) => checkOnGrey(e)}>
        <div className={style.popup_inner}>
          <div className={style.popup_header}>
            <button
              className={style.close_btn}
              onClick={() => props.setTrigger(false)}
            >
              <Image src={Cross} alt="Cross" />
              Закрыть
            </button>
            <Link href="/" className={style.popup_logo}>
              <Image src={Logo} alt="logo" className={style.popup_img} />
            </Link>
          </div>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

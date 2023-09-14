import Image from "next/image";
import Check from "../../../../public/white_check.svg";
import style from "./thanksforcontactingus.module.scss";
export default function ThanksForContactingUs(props) {
  return (
    <div
      className={style.thanks_wrapper}
      style={{
        backgroundColor: props.bg,
        width: props.width,
        height: props.height,
      }}
    >
      <Image src={Check} alt="Check" />
      <h4 className={style.thanks_title}>Благодарим за обращение</h4>
      <p>Мы свяжемся с вами в ближайшее время</p>
    </div>
  );
}

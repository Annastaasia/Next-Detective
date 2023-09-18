import Link from "next/link";
import Image from "next/image";
import style from "./servicescard.module.scss";
import ArrowRight from "../../../../public/vectorright.svg"

export default function Card(props) {
  return (
    <div className={`${style.card}`} key={`${props.id}`}>
      <Image width={0} height={0} style={{ width: 'auto', height: 'auto' }} src={props.icon} className={`${style.card_icon}`} alt="" />
      <Link href="/services_for_individuals/geolocation">
        <p className={`${style.card_title}`}>{props.title}</p>
      </Link>
      <p className={`${style.card_text}`}>{props.text}</p>
      <div className={`${style.card_price_container}`}>
        <p className={`${style.card_price}`}>{props.price}</p>
        <Link href="/services_for_individuals/geolocation">
          <div>
            <span>Подробнее</span>
            <Image
              src={ArrowRight}
              alt="Нажмите, чтобы узнать подробнее"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

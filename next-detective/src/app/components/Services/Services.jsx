import style from "./services.module.scss";
import Link from "next/link";
import Image from "next/image";
import Person from "../../../../public/icon_person.svg";
import Business from "../../../../public/icon_business.svg";
import Vectorright from "../../../../public/Vectorright.jsx";
import ServicesSlider from "./ServicesSlider/ServicesSlider";


export default function Services() {
  return (
    <>
      <section className={style.container}>
        <div className={style.services__header}>
          <h3>Услуги</h3>
          <ul>
            <li className={style.services__person}>
              <Image src={Person} alt="person"/>
              Для частных лиц
            </li>
            <Link href="/services_for_business">
              <li>
                <Image src={Business} alt="small suitcase" />
                Для бизнеса
              </li>
            </Link>
          </ul>
          <Link href="/services_for_individuals">
            <button type="submit" className={style.button}>
              Смотреть все
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>

        <ServicesSlider />

        <Link href="/services">
          <button type="submit" className={style.buttonmobile}>
            Смотреть все
            <div className={style.vector}>
              <Vectorright />
            </div>
          </button>
        </Link>
      </section>
    </>
  );
}

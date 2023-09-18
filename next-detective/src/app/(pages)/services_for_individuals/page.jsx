import style from "./servicespage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import Link from "next/link";
import Image from "next/image";
import Person from "../../../../public/dashicons_businessman.svg";
import Business from "../../../../public/dashbusiness-center.svg";
import Info from "../../../../public/services-chat.svg";
import Family from "../../../../public/services-family.svg";
import Binoculars from "../../../../public/services-binoculars.svg";
import Search from "../../../../public/services-search.svg";
import Protect from "../../../../public/services-protect.svg";
import Journalism from "../../../../public/services-journalism.svg";
import { ServicesShowMore2 } from "../../components/ServicesShowMore/ServicesShowMore2";
import { ServicesShowMore } from "../../components/ServicesShowMore/ServicesShowMore";
import { ServicesMobile } from "../../components/ServicesMobile/ServicesMobile";

export default function ServicesPage() {
  return (
    <>
      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>Услуги</h1>
          <div className={style.services__tabs}>
            <div className={style.tabs__person}>
              <Image src={Person} alt="person" className={style.icon} />
              Для частных лиц
            </div>
            <Link href="/services_for_business">
              <div className={style.tabs__business}>
                <Image
                  src={Business}
                  alt="small suitcase"
                  className={style.icon}
                />
                Для бизнеса
              </div>
            </Link>
          </div>
        </section>
        <section className={style.catalog}>
          <section className={style.blokinfo}>
            <Image src={Info} alt="Info" className={style.img} />
            <h2 className={style.h2}>Сбор информации</h2>
            <Link href="/">
              <p className={style.text}>Досье на человека</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Компромат на человека</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Организация слежки</p>
            </Link>
            <Link href="/services_for_individuals/geolocation">
              <p className={style.text}>
                Пробить геолокацию по номеру телефона
              </p>
            </Link>
            <Link href="/">
              <p className={style.text}>Проверка запрета на выезд</p>
            </Link>
            <ServicesShowMore2 />
          </section>

          <section className={style.blokfamily}>
            <Image src={Family} alt="Family" className={style.img} />
            <h2 className={style.h2}>Семейные вопросы</h2>
            <Link href="/">
              <p className={style.text}>Проверка образ жизни детей</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Проверить на верность</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Провокация измен</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Слежка за женой</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Слежка за мужем</p>
            </Link>
          </section>

          <section className={style.blokbinoculars}>
            <Image src={Binoculars} alt="Binoculars" className={style.img} />
            <h2 className={style.h2}>Расследования</h2>
            <Link href="/">
              <p className={style.text}>Журналистское расследование</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Расследование убийств</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Расследование мошенничества</p>
            </Link>
          </section>

          <section className={style.bloksearch}>
            <Image src={Search} alt="Search" className={style.img} />
            <h2 className={style.h2}>Розыск</h2>
            <Link href="/">
              <p className={style.text}>Поиск родственников</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Розыск имущества</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Поиск человека по адресу</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Розыск за границей</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Частный розыск</p>
            </Link>
            <ServicesShowMore />
          </section>

          <section className={style.blokprotect}>
            <Image src={Protect} alt="Protect" className={style.img} />
            <h2 className={style.h2}>Защита</h2>
            <Link href="/">
              <p className={style.text}>Поиск прослушки в квартире</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Обратиться в СМИ</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Выход из секты</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Помощь и защита при шантаже</p>
            </Link>
            <Link href="/">
              <p className={style.text}>Защита от буллинга</p>
            </Link>
          </section>

          <section className={style.blokjournalism}>
            <Image src={Journalism} alt="Journalism" className={style.img} />
            <h2 className={style.h2}>Журналистика</h2>
            <Link href="/">
              <p className={style.text}>Заказать расследование</p>
            </Link>
          </section>
        </section>

        <ServicesMobile />
      </main>
    </>
  );
}

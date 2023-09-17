import style from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Telegram from "../../../../public/footer-telegram.svg";
import Techat from "../../../../public/footer-techat.svg";
import Youtube from "../../../../public/footer-youtube.svg";
import Profi from "../../../../public/footer-profi.svg";
import Location from "../../../../public/footer-location.svg";
import Phone from "../../../../public/footer-phone.svg";
import Time from "../../../../public/footer-time.svg";
import Email from "../../../../public/footer-email.svg";
import Mir from "../../../../public/footer-mir.png";
import Visa from "../../../../public/footer-visa.png";
import Mastercard from "../../../../public/footer-mastercard.png";

export default function Footer() {
  return (
    <>
      <footer className={style.container}>
        <div className={style.blokheader}>
          <Image src={Logo} alt="logo" className={style.logo} />
          <div className={style.bloksocnet}>
            <p className={style.p}>Мы в социальных сетях</p>

            <div className={style.blokmobile}>
              <a
                className={style.bloknet}
                href="https://t.me/pershin_detective"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Telegram} alt="Telegram" className={style.socnet} />
              </a>

              <a
                className={style.bloknet2}
                href="https://tenchat.ru/0323735?utm_source=8c7f5dcb-f757-4668-94a9-e0f145c517ff"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Techat} alt="Techat" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://www.youtube.com/@pershin_detective"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Youtube} alt="Youtube" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://stavropol.profi.ru/profile/PershinKO/?mobileApp=1"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Profi} alt="Profi" className={style.socnet} />
              </a>
            </div>
          </div>
        </div>

        <div className={style.blokmain}>
          <div className={style.blokmain1}>
            <div className={style.contact}>
              <p className={style.title}>Контакты</p>

              <div className={style.section}>
                <Image src={Location} alt="Location" className={style.icon} />
                <p className={style.adress}>
                  г. Москва, Ул. Александра Солженицына 42
                </p>
              </div>

              <div className={style.section}>
                <Image src={Phone} alt="Phone" className={style.icon} />
                <p className={style.p}>+7 (968) 686-86-85</p>
              </div>

              <div className={style.section}>
                <Image src={Time} alt="Time" className={style.icon} />
                <p className={style.p}>Понедельник-суббота 8:00-18:00</p>
              </div>

              <div className={style.section}>
                <Image src={Email} alt="Email" className={style.icon} />
                <p className={style.p}>Pershin-detective@yandex.ru</p>
              </div>
            </div>

            <div className={style.card}>
              <Image src={Mir} alt="Mir" className={style.cardicon} />
              <Image src={Visa} alt="Visa" className={style.cardicon} />
              <Image
                src={Mastercard}
                alt="Mastercard"
                className={style.cardicon}
              />
            </div>
          </div>

          <div className={style.blokmain2}>
            <p className={style.title}>Для бизнеса</p>
            <Link href="/">
              <p className={style.p}>Бизнес войны</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Сбор информации</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Проверки</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Розыск</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Взыскания долгов</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Разведка</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Защита и безопасность</p>{" "}
            </Link>
            <Link href="/">
              <p className={style.p}>Расследования</p>{" "}
            </Link>
          </div>

          <div className={style.blokmain3}>
            <p className={style.title}>Для частных лиц</p>
            <Link href="/">
              <p className={style.p}>Сбор информации</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Семейные вопросы</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Розыск</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Защита</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Журналистика</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Расследования</p>
            </Link>
          </div>

          <div className={style.blokmain4}>
            <p className={style.title}>Меню</p>
            <Link href="/blog">
              <p className={style.p}>Блог</p>
            </Link>
            <Link href="/reviews">
              <p className={style.p}>Отзывы</p>
            </Link>
            <Link href="/contacts">
              <p className={style.p}>Контакты</p>
            </Link>
            <Link href="/services_for_individuals">
              <p className={style.p}>Услуги</p>
            </Link>
            <Link href="/price">
              <p className={style.p}>Цены</p>
            </Link>
          </div>
        </div>

        <div className={style.blokfooter}>
          <p className={style.p}>
            © 2023 PERSIN & PARTNERS. Все права защищены
          </p>
          <div className={style.politic}>
            <Link href="/">
              <p className={style.p}>Политика конфиденциальности</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Политика использования Cookies</p>
            </Link>
            <Link href="/">
              <p className={style.p}>Карта сайта</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

import style from "./review.module.scss";
import ReviewsSlider from "../ReviewsSlider/ReviewsSlider";
import ArrowRight from "../../../../public/vectorright.svg";
import Image from "next/image";

export default function Reviews() {
  return (
    <>
      <section className={`${style.container}`}>
        <div className={style.blok}>
          <h3 className={style.h3}>Отзывы</h3>
          <div className={`${style.blok_buttons}`}>
            <a
              className={style.a}
              href="http://profi.ru/profile/PershinKO/?mobileApp=1"
              target="_blank"
              rel="noreferrer"
            >
              Отзывы на Профи.ру
              <Image
                src={ArrowRight}
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
            <a
              className={style.a}
              href="http://profi.ru/profile/PershinKO/?mobileApp=1"
              target="_blank"
              rel="noreferrer"
            >
              Отзывы на Яндекс.Карты
              <Image
                src={ArrowRight}
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
          </div>
        </div>
        <ReviewsSlider />
        
      </section>
    </>
  );
}

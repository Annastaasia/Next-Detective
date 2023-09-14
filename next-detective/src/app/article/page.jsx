"use client";

import Blog from "../components/Blog/Blog";
import { Carousel } from "../components/Carousel/Carousel.jsx";
import { Content } from "../components/Content/Content.jsx";
import { Questions } from "../components/Questions/Questions";
import { ButtonsLike } from "../components/ButtonsLike/ButttonsLike";
import style from "./articlepage.module.scss";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.jsx";
import Image from "next/image";
import ArticleMain from "../../../public/article-main-photo.png";
import Eye from "../../../public/article-eye.svg";
import Fire from "../../../public/article-fire.svg";
import Car from "../../../public/article-car.svg";
import Cat from "../../../public/article-cat.svg";
import Slider1 from "../../../public/article-slider1.png";
import Slider2 from "../../../public/article-slider2.png";
import Slider3 from "../../../public/article-slider3.png";
import Quote from "../../../public/article-quote.svg";
import Info from "../../../public/article-info.svg";
import FormPhoto from "../../../public/form-foto.png";
import Telegram from "../../../public/footer-telegram.svg";
import Whatsapp from "../../../public/article-whatsapp.svg";
import Vk from "../../../public/article-vk.svg";
import Fc from "../../../public/article-facebook.svg";

export default function ArticlePage(props) {
  const slides = [
    <Image src={Slider1} alt="Slider1" className={style.imageslider} />,
    <Image src={ArticleMain} className={style.imageslider} alt="Slider2" />,
    <Image src={Slider3} alt="Slider3" className={style.imageslider} />,
    <Image src={ArticleMain} alt="Slider4" className={style.imageslider} />,
    <Image src={Slider1} alt="Slider5" className={style.imageslider} />,
    <Image src={ArticleMain} alt="Slider6" className={style.imageslider} />,
  ];

  return (
    <>
      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <Image src={ArticleMain} className={style.image} alt="article main" />
          <div className={style.container_time}>
            <div className={style.blok_time}>
              <p className={style.time}>Читать 2 минуты</p>
              <Image src={Eye} alt="eye" className={style.icon} />
              <p className={style.time}>999</p>
            </div>
            <p className={style.time}>23.05.2023</p>
          </div>
          <h1 className={style.h1}>Розыск человека и автомобиля</h1>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует{" "}
          </p>
          <Content />
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title1">
            Заголовок
          </h2>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует отметить, что
            граница обучения кадров говорит о возможностях своевременного{" "}
          </p>
        </section>

        <section className={style.section_tablesvg}>
          <h2 className={style.h2}>Заголовок</h2>
          <div className={style.about}>
            <div className={style.blokabout}>
              <Image src={Fire} alt="fire" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blokabout}>
              <Image src={Car} alt="car" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blokabout}>
              <Image src={Cat} alt="cat" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title2">
            Заголовок
          </h2>
          <div className={style.numbers}>
            <div className={style.blok_numbers}>
              <p className={style.number}>1</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blok_numbers}>
              <p className={style.number}>2</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blok_numbers}>
              <p className={style.number}>3</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2}>Заголовок</h2>
          <Carousel>{slides}</Carousel>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2}>Заголовок</h2>
          <div className={style.blok_titletext}>
            <Image src={Slider2} alt="slider2" className={style.image} />
            <p className={style.text}>Подпись к фото</p>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title3">
            Заголовок
          </h2>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует отметить, что
            граница обучения кадров говорит о возможностях своевременного{" "}
          </p>
        </section>

        <section className={style.section_quote}>
          <Image src={Quote} alt="Quote" className={style.img} />
          <div className={style.blok_quote}>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая
            </p>
            <div className={style.blokdirector}>
              <Image src={FormPhoto} alt="director" className={style.photo} />
              <p className={style.text}>
                Першин Кирилл Олегович
                <br />
                <span className={style.textdirector}>
                  Руководитель детективного агентства
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title4">
            Заголовок
          </h2>
          <div className={style.blok_titletext}>
            <h3 className={style.h3} id="subtitle1">
              Подзаголовок
            </h3>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени предоставлены
              сами себе. Следует отметить, что граница обучения кадров говорит о
              возможностях своевременного{" "}
            </p>
          </div>
          <div className={style.blok_titletext}>
            <h3 className={style.h3} id="subtitle2">
              Подзаголовок
            </h3>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени предоставлены
              сами себе. Следует отметить, что граница обучения кадров говорит о
              возможностях своевременного{" "}
            </p>
          </div>
        </section>

        <section className={style.section_titletext}>
          <Image src={Slider3} alt="Slider3" className={style.image} />
        </section>

        <section className={style.section_gray}>
          <Image src={Quote} alt="Quote" className={style.img} />
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая
          </p>
        </section>

        <section className={style.section_gray}>
          <Image src={Info} alt="Info" className={style.img} />
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая
          </p>
        </section>

        <section className={style.section_question}>
          <Questions />
        </section>

        <section className={style.section_autor}>
          <Image src={FormPhoto} alt="director" className={style.photo} />
          <p className={style.textautor}>
            Автор статьи
            <br />
            <span className={style.textautordirector}>
              Першин Кирилл Олегович
            </span>
          </p>
        </section>

        <section className={style.section_socnet}>
          <ButtonsLike />
          <div className={style.bloksocnet}>
            <p className={style.p}>Поделиться</p>

            <div className={style.blokmobile}>
              <a
                className={style.bloknet}
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Telegram} alt="Telegram" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://api.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Whatsapp} alt="Whatsapp" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://vk.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Vk} alt="Vk" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://es-es.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Fc} alt="Fc" className={style.socnet} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <main>
        <Blog />
      </main>
    </>
  );
}

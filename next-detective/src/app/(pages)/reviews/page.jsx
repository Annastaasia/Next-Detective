import style from "./reviews.module.scss";
import reviews from "../../components/Review/review-array";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import Arrow from "../../../../public/vectorright.svg";
import Image from "next/image";

export default function Reviews(props) {
  return (
    <>
      <main className={style.page_container}>
        <section className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>
            отзывы о компании pershin & partners
          </h3>
          <a
            href="https://yandex.ru/maps/org/pershin_partners/77630423623/reviews/?add-review=true"
            target="_blank"
            rel="noreferrer"
            className={style.page_link}
          >
            Оставить отзыв
            <Image src={Arrow} alt="" />
          </a>
        </section>

        <Pagination array={reviews} wrapper={style.page_block} />
      </main>
    </>
  );
}

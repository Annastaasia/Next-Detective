import style from "./reviewcard.module.scss";
import Link from "next/link";
import Star from "../../../../public/icon_star.svg";
import emptyStar from "../../../../public/icon_empty_star.svg";
import Image from "next/image";

export default function Review(props) {
  const stars = [];

  const rand = function () {
    return Math.random();
  };

  for (let i = 0; i < props.stars; i++) {
    stars.push(<Image src={Star} alt="" key={rand()} />);
  }

  if (stars.length < 5) {
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Image src={emptyStar} alt="" key={rand()} />);
    }
  }

  if (props.isLink === true) {
    return (
      <>

        <div className={`${style.review}`}>
          <div className={`${style.review_stars}`}>
            <span>{props.review}</span>
            {stars}
          </div>
          <Link href="/reviews">
            <p className={`${style.review_name}`}>{props.name}</p>
          </Link>
          <p className={`${style.review_date}`}>{props.date}</p>
          <p className={`${style.review_text}`}>{props.text}</p>
        </div>

      </>
    );
  } else {
    return (

      <div className={`${style.review}`}>
        <div className={`${style.review_stars}`}>
          <span>{props.review}</span>
          {stars}
        </div>
        <a
          target="_blank"
          href="https://yandex.ru/web-maps/org/77630423623/reviews?reviews[publicId]=fnuuk197am45jz6ep2m0bg0jur&utm_source=review"
          rel="noreferrer"
        >
          <p className={`${style.review_name}`}>{props.name}</p>
        </a>
        <p className={`${style.review_date}`}>{props.date}</p>
        <p className={`${style.review_text}`}>{props.text}</p>
      </div>

    );
  }
}

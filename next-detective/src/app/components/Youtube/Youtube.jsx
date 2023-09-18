import style from "./youtube.module.scss";
import icon from "../../../../public/icon_youtube.svg";
import Image from "next/image";
import YoutubeSlider from "./YoutubeSlider/YoutubeSlider";

export default function Youtube() {
  return (
    <section className={`${style.container}`}>
      <div className={`${style.youtube_header}`}>
        <h3 className={style.h3}>ПОЗНАКОМЬТЕСЬ С P&P НА YOUTUBE</h3>
        <a
          className={style.a}
          href="https://www.youtube.com/@pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            Наш блог на YouTube
            <Image src={icon} alt="YouTube"/>
          </span>
        </a>
      </div>
      <YoutubeSlider />
      
    </section>
  );
}

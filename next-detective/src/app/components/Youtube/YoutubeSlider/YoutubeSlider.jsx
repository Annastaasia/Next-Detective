"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import preview1 from "../../../../../public/video_preview_1.png";
import preview2 from "../../../../../public/video_preview_2.png";
import preview3 from "../../../../../public/video_preview_3.png";
import play from "../../../../../public/play_button.svg";
import Image from "next/image";
import style from "../youtube.module.scss"
import "@splidejs/react-splide/css";

export default function YoutubeSlider() {
    return(
        <Splide
        options={{
          perPage: 2,
          breakpoints: {
            1280: {
              perPage: 3,
            },
            968: {
              perPage: 2,
              arrows: false,
            },
            500: {
              perPage: 2,
              height: 200,
              gap: 0,
              arrows: false,
            },
          },
          perMove: 1,
          rewind: true,
          autoWidth: true,
          height: 487,
          pagination: false,
          arrows: true,
          type: "loop",
          gap: 10,
        }}
        className={`${style.custom_splide}`}
      >
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ipz85rqjzJU&amp;t=28s"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={`${style.video}`}
              src={preview1}
              alt="video"
            />
            <Image
              className={`${style.play}`}
              src={play}
              alt="play video"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=yAYJnED2nRc&amp;t=58s"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={`${style.video}`}
              src={preview2}
              alt="video"
            />
            <Image
              className={`${style.play}`}
              src={play}
              alt="play video"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ltecs0t_dJo&amp;t=6s"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={`${style.video}`}
              src={preview3}
              alt="video"
            />
            <Image
              className={`${style.play}`}
              src={play}
              alt="play video"
            />
          </a>
        </SplideSlide>
      </Splide>
    )
}
"use client";
import style from "./blog.module.scss";
import posts from "../Post/posts";
import Post from "../Post/Post";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../../../public/vectorright.svg"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Blog() {
  return (
    <>
      <section className={`${style.container}`}>
        <div className={style.header_blog}>
          <h3>Блог</h3>
          <Link href="/blog">
            Смотреть все
            <Image
              src={ArrowRight}
              alt="Нажмите, чтобы перейти и посмотреть все посты"
            />
          </Link>
        </div>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              744: {
                perPage: 2,
              },
              480: {
                perPage: 1,
                height: 570,
                gap: 16,
              },
            },
            rewind: false,
            autoWidth: true,
            height: 630,
            pagination: false,
            arrows: false,
            type: "loop",
            gap: 24,
          }}
          className={style.custom_splide}
          aria-label="Blog Posts"
        >
          {posts.map((post, index) => (
            <SplideSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Post
                link={post.link}
                image={post.image}
                tag={post.tag}
                title={post.title}
                text={post.text}
                date={post.date}
              ></Post>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  );
}

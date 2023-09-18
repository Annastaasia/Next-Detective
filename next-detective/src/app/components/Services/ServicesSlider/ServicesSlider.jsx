"use client"
import cards from "../../ServicesCard/services";
import ServiciesCard from "../../ServicesCard/ServicesCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import style from "../services.module.scss";

export default function ServicesSlider() {
    return(
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              744: {
                perPage: 2,
                arrows: false,
              },
              480: {
                perPage: 1,
                height: 490,
                gap: 16,
                arrows: false,
              },
            },
            perMove: 1,
            rewind: true,
            autoWidth: true,
            height: 560,
            pagination: false,
            arrows: true,
            type: "loop",
            gap: 20,
          }}
          aria-label="Services"
          className={style.custom_splide}
        >
          {cards.map((card) => (
            <SplideSlide
              key={card.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <ServiciesCard
                icon={card.icon}
                title={card.title}
                text={card.text}
                price={card.price}
              ></ServiciesCard>
            </SplideSlide>
          ))}
        </Splide>
    )
}
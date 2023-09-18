"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const location = usePathname();
  const pathnames = location.split("/").filter((pathname) => pathname);
  return (
    <>
      <nav aria-label="breadcrumb" className={style.breadcrumbs}>
        <ol>
          <li>
            <Link href="/">Главная</Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={pathname}>
                {isLast ? (
                  <span>{translateBreadcrumb(pathname)}</span>
                ) : (
                  <Link href={routeTo}>{translateBreadcrumb(pathname)}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

const translateBreadcrumb = (breadcrumb) => {
  const translations = {
    home: "Главная",
    services_for_individuals: "/ Услуги для частных лиц",
    blog: "/ Блог",
    reviews: "/ Отзывы",
    geolocation: "/ Пробить геолокацию по номеру телефона",
    article1: "/ Розыск человека и автомобиля",
    price: "/ Цены",
  };

  return translations[breadcrumb] || breadcrumb;
};

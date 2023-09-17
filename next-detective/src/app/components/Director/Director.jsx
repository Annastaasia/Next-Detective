import style from "./director.module.scss";
import { ButtonModalDirector } from "../ButtonModalDirector/ButtonModalDirector";
import Image from "next/image";
import WorkHistory from "../../../../public/work-history.svg";

export default function Director() {
  return (
    <>
      <section className={style.container}>
        <div className={style.backgroundsmall}></div>
        <div className={style.blok}>
          <div className={style.about}>
            <p className={style.title}>Руководитель детективного агентства</p>
            <h3 className={style.h3}>Першин Кирилл Олегович</h3>
          </div>
          <p className={style.text}>
            Руководитель и лицо компании - Першин Кирилл Олегович – имеет
            большой эмпирический опыт в оказании детективных услуг, состоит в
            партнерских отношениях с ведущим медийным детективным агентством
            "Legion", является участником международных ассоциации детективов,
            ведет открытую и прозрачную политику работы, призывает не верить на
            слово своих заказчиков, а опираться только на подробные отчёты и
            факты.
            <br /> <br />
            Кирилл Олегович активно ведёт свой YouTube блог и социальные сети,
            где как специалист по безопасности даёт необходимые рекомендации,
            полезный материал и рассказывает о своих услугах и принципах их
            оказания.
          </p>

          <div className={style.containerwork}>
            <Image src={WorkHistory} alt="work-history" className={style.img} />
            <p className={style.p}>Стаж в частной практике более 15 лет</p>
          </div>
          <ButtonModalDirector />
        </div>

        <div className={style.background}></div>
      </section>
    </>
  );
}

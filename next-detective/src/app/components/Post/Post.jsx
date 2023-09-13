// "use client"
import style from "./post.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Post(props) {
  return (
    <Link href={`${props.link}`} className={`${style.post}`}>
      <Image src={props.image} width={100} height={200} alt="post" />
      <span>{props.tag}</span>
      <div className={`${style.post_content}`}>
        <p className={`${style.post_title}`}>{props.title}</p>
        <p className={`${style.post_text}`}>{props.text}</p>
        <div className={`${style.post_bottom}`}>
          <p className={`${style.post_button}`}>Читать</p>
          <p className={`${style.post_date}`}>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}

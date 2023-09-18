"use client"
import { useState } from "react";
import "./socialmediabuttons.scss";
import Image from "next/image";
import MediaButttons from "../../../../public/bxs_chat.svg";
import Telegram from "../../../../public/telegram.svg";
import WhatsApp from "../../../../public/whatsapp.svg";

export default function SocialMediaButtons() {
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="socmedia_container">
       <button onClick={handleButtonClick} className="socmedia_button">
        <Image
          src={MediaButttons}
          alt="socmedia"
          className={`socmedia_icon ${showButtons ? "clicked" : ""}`}
          style={{
            transition: "transform 0.3s ease",
          }}
        />
      </button> 
      <div className={`social-buttons ${showButtons ? "show" : "hide"}`}>
        <a
          href="https://t.me/pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Telegram} alt="Telegram" className="socmedia_telegram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=79686868685&text=Доброго%20времени%20суток!"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={WhatsApp} alt="WhatsApp" className="socmedia_whatsapp" />
        </a>
      </div>
    </div>
  );
};

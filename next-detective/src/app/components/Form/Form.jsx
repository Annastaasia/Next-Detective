"use client";
import style from "./form.module.scss";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import FormError from "../../../../public/FormError.jsx";
import FormCheck from "../../../../public/FormCheck.jsx";
import Vectorright from "../../../../public/Vectorright.jsx";
import { useState } from "react";
import mainstyles from "../MainBG/mainbg.module.scss";
import "../FAQ/faq.scss";

import useWindowDimensions  from '../../hooks/useWindowDimensions';

export default function Form(props) {
  const dimensions = useWindowDimensions();
  const isMobile = () => (dimensions.width <= 580) ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    props.isPopup ? props.onButtonClick() : props.onButtonClickShow();
  };

  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusNumber, setIsFocusNumber] = useState(false);
  const [isFocusQuestion, setIsFocusQuestion] = useState(false);

  const handleFocusName = () => {
    setIsFocusName(true);
    trigger("name");
  };

  const handleFocusNumber = () => {
    setIsFocusNumber(true);
    trigger("number");
  };

  const handleFocusQuestion = () => {
    setIsFocusQuestion(true);
    trigger("question");
  };

  if (props.isOnMain && isMobile()) {
    return null;
  } else {
    return (
      <form
        className={
          props.isOnMain ? mainstyles.form : props.isPopup ? style.form : "form"
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.wrapper}>
          <input
            {...register("name", {
              required: true,
              minLength: 2,
            })}
            onFocus={() => handleFocusName()}
            onBlur={() => handleFocusName()}
            className={style.name}
            type="text"
            placeholder="Как к вам обращаться?"
          ></input>
          {errors?.name?.type === "required" && (
            <div className={style.icon}>
              <FormError />
            </div>
          )}
          {!errors?.name && isFocusName && (
            <div className={style.icon}>
              <FormCheck />
            </div>
          )}
        </div>

        <div className={style.wrapper}>
          <InputMask
            {...register("number", {
              required: true,
              minLength: 18,
            })}
            className={style.number}
            type="text"
            placeholder="Номер телефона"
            mask="+7 (999) 999-99-99"
            maskChar=""
            onFocus={() => handleFocusNumber()}
            onBlur={() => handleFocusNumber()}
          />
          {errors?.number?.type === "required" && (
            <div className={style.icon}>
              <FormError />
            </div>
          )}
          {errors?.number?.type === "minLength" && (
            <div className={style.iconnumber}>
              <FormError />
            </div>
          )}
          {!errors?.number && isFocusNumber && (
            <div className={style.icon}>
              <FormCheck />
            </div>
          )}
        </div>

        {props.isPopup ? (
          ""
        ) : (
          <div className={style.wrapper}>
            <input
              {...register("question", {
                required: true,
                minLength: 2,
              })}
              className={style.question}
              type="text"
              placeholder="Какой вопрос вас беспокоит?"
              onFocus={() => handleFocusQuestion()}
              onBlur={() => handleFocusQuestion()}
            ></input>
            {errors?.question?.type === "required" && (
              <div className={style.icon}>
                <FormError />
              </div>
            )}
            {!errors?.question && isFocusQuestion && (
              <div className={style.icon}>
                <FormCheck />
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className={
            props.isOnMain
              ? mainstyles.button
              : props.isPopup
              ? style.button
              : "button"
          }
        >
          {props.isOnMain ? "Отправить заявку" : "Отправить"}
          <div className={style.vector}>
            <Vectorright />
          </div>
        </button>
      </form>
    );
  }
}

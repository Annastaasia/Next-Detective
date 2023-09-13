"use client";
import React, { useState, useRef, useEffect } from "react";
import "./questions.scss";
import { FiPlus } from "react-icons/fi";

export const Questions = () => {
  const [active1, setActive1] = useState(false);

  const contentRef1 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);

  const contentRef2 = useRef(null);

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);

  const contentRef3 = useRef(null);

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  return (
    <>
      <h2 className="h2question">Ответы на популярные вопросы</h2>
      <button
        className={`question-section ${active1}`}
        onClick={toggleAccordion1}
      >
        <div>
          <div className="question-align">
            <p className="question-style">Вопрос 1</p>
            <FiPlus
              className={active1 ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRef1}
            className={active1 ? `answer answer-divider` : `answer`}
          >
            <p className="answer-align">
              Предварительные выводы неутешительны: дальнейшее развитие
              различных форм деятельности создаёт предпосылки для переосмысления
              внешнеэкономических политик. С другой стороны, базовый вектор
              развития обеспечивает актуальность поставленных обществом задач.
              Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь обеспечивает актуальность вывода текущих
              активов.
            </p>
          </div>
        </div>
      </button>

      <button
        className={`question-section ${active2}`}
        onClick={toggleAccordion2}
      >
        <div>
          <div className="question-align">
            <p className="question-style">Вопрос 2</p>
            <FiPlus
              className={active2 ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRef2}
            className={active2 ? `answer answer-divider` : `answer`}
          >
            <p className="answer-align">
              Предварительные выводы неутешительны: дальнейшее развитие
              различных форм деятельности создаёт предпосылки для переосмысления
              внешнеэкономических политик. С другой стороны, базовый вектор
              развития обеспечивает актуальность поставленных обществом задач.
              Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь обеспечивает актуальность вывода текущих
              активов.
            </p>
          </div>
        </div>
      </button>

      <button
        className={`question-section ${active3}`}
        onClick={toggleAccordion3}
      >
        <div>
          <div className="question-align">
            <p className="question-style">Вопрос 3</p>
            <FiPlus
              className={active3 ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRef3}
            className={active3 ? `answer answer-divider` : `answer`}
          >
            <p className="answer-align">
              Предварительные выводы неутешительны: дальнейшее развитие
              различных форм деятельности создаёт предпосылки для переосмысления
              внешнеэкономических политик. С другой стороны, базовый вектор
              развития обеспечивает актуальность поставленных обществом задач.
              Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь обеспечивает актуальность вывода текущих
              активов.
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

import React, { useRef } from "react";

export default function Answers({
  answers,
  seletedAnswers,
  answerState,
  onSelect,
}) {
  const Options = useRef();

  if (!Options.current) {
    Options.current = [...answers];
    Options.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {Options.current.map((ans) => {
        const isSelected = seletedAnswers === ans;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelect(ans)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

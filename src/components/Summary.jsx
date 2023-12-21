import React from "react";
import TrophyIcon from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers, answerSummary }) {
  const totalQuestion = QUESTIONS.length;
  let correctAns = 0;
  let wrongAns = 0;
  let skippAns = totalQuestion - answerSummary.length;

  console.log(answerSummary);
  const CalculateSummary = () => {
    answerSummary.map((ans) => {
      if (ans === "correct") {
        correctAns += 1;
      } else if (ans === "wrong") {
        wrongAns += 1;
      }
    });
    return 0;
  };
  CalculateSummary();

  correctAns = (correctAns / totalQuestion) * 100;
  wrongAns = (wrongAns / totalQuestion) * 100;
  skippAns = (skippAns / totalQuestion) * 100;

  return (
    <div id="summary">
      <img src={TrophyIcon} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippAns.toFixed(0)}%</span>
          <span className="text">SKIPPED</span>
        </p>
        <p>
          <span className="number">{correctAns.toFixed(0)}%</span>
          <span className="text">ANSWERED CORRECTLY</span>
        </p>
        <p>
          <span className="number">{wrongAns.toFixed(0)}%</span>
          <span className="text">ANSWERED INCORRECTLY</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((ans, index) => {
          let cssClass = "user-answer";

          if (ans === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else if (ans === null) {
            cssClass += " skipped";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

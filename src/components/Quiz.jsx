import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import TrophyIcon from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQurstionIndex = userAnswers.length;
  const quizIsComplete = activeQurstionIndex === QUESTIONS.length;

  const handleSelectAns = useCallback(function handleSelectAns(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAns(null);
  }, [handleSelectAns]);

  // const shffleAnswers = (answers) => {
  //   while (Options.length < 4) {
  //     length = QUESTIONS[activeQurstionIndex].answers.length;
  //     let ShffledChoiceIndex = Math.floor(Math.random() * length);
  //     if (Options.includes(answers[ShffledChoiceIndex])) {
  //       continue;
  //     } else {
  //       Options.push(answers[ShffledChoiceIndex]);
  //     }
  //   }
  // };

  if (quizIsComplete === true) {
    return (
      <div id="summary">
        <img src={TrophyIcon} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQurstionIndex}
        index={activeQurstionIndex}
        onSelectAnswer={handleSelectAns}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

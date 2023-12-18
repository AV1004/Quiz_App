import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import TrophyIcon from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQurstionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQurstionIndex === QUESTIONS.length;

  const handleSelectAns = useCallback(
    function handleSelectAns(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQurstionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQurstionIndex]
  );

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
        questionText={QUESTIONS[activeQurstionIndex].text}
        answers={QUESTIONS[activeQurstionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAns}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerSummary, setAnswerSummary] = useState([]);

  const activeQurstionIndex = userAnswers.length;
  const quizIsComplete = activeQurstionIndex === QUESTIONS.length;

  const handleSelectAns = useCallback(function handleSelectAns(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const sendAns = (ans) => {
    if (ans === QUESTIONS[activeQurstionIndex].answers[0]) {
      setAnswerSummary((prevAnsSummary) => {
        return [...prevAnsSummary, "correct"];
      });
    } else if (
      ans !== QUESTIONS[activeQurstionIndex].answers[0] &&
      ans !== null
    ) {
      setAnswerSummary((prevAnsSummary) => {
        return [...prevAnsSummary, "wrong"];
      });
    }

    console.log(answerSummary);
  };

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
    return <Summary userAnswers={userAnswers} answerSummary={answerSummary} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQurstionIndex}
        index={activeQurstionIndex}
        onSelectAnswer={handleSelectAns}
        onSkipAnswer={handleSkipAnswer}
        sendAns={sendAns}
      />
    </div>
  );
}

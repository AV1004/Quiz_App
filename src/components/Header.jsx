import React from "react";
import headerImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={headerImage} alt="ReactQuiz" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

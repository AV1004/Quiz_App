import React, { useState } from "react";

export default function Quiz() {
  const [activeQuesionIndex, setActiveQuesionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently Active Questions</p>;
}

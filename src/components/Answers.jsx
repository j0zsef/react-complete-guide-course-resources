import Answer from "./Answer.jsx";
import { useRef } from "react";

export default function Answers({ answers, onSubmitAnswer }) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = answers;
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => (
        <Answer
          key={answer}
          onSubmitAnswer={() => {
            onSubmitAnswer(answer);
          }}
          answer={answer}
        />
      ))}
    </ul>
  );
}

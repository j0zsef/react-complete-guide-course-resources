import Answer from "./Answer.jsx";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext.jsx";

export default function Question({ question }) {
  const quizCtx = useContext(QuizContext);
  const handleSubmitAnswer = function (answer) {
    //increment skip if skip
    //increment incorrect if incorrect
    //increment correct if correct
    quizCtx.submitAnswer();
  };

  return (
    <div key={question.id} id="question">
      <h2>{question.text}</h2>
      <ul id="answers">
        {question.answers.map((answer) => (
          <Answer onSubmitAnswer={handleSubmitAnswer} answer={answer} />
        ))}
      </ul>
    </div>
  );
}

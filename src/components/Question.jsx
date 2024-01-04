import Answer from "./Answer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import { QuizContext } from "../store/QuizContext.jsx";
import { useContext, useRef } from "react";
import Answers from "./Answers.jsx";
const maxTime = 10000;

export default function Question({ question }) {
  const quizCtx = useContext(QuizContext);

  const handleSubmitAnswer = function (answer) {
    if (question.correctAnswer === answer) {
      quizCtx.submitAnswer(question.text, answer, true);
    } else {
      quizCtx.submitAnswer(question.text, answer, false);
    }

    quizCtx.nextQuestion();
  };

  return (
    <div id="question">
      <ProgressBar
        timeout={maxTime}
        onTimeout={() => {
          handleSubmitAnswer("");
        }}
      />
      <h2>{question.text}</h2>
      <Answers answers={question.answers} onSubmitAnswer={handleSubmitAnswer} />
    </div>
  );
}

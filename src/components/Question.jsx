import Answer from "./Answer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import { QuizContext } from "../store/QuizContext.jsx";
import { useContext, useEffect, useState } from "react";
const maxTime = 7000;

export default function Question({ question }) {
  const [timer, setRemainingTime] = useState(maxTime);
  const quizCtx = useContext(QuizContext);
  const handleSubmitAnswer = function (answer) {
    if (quizCtx.currentQuestion.question.correctAnswer === answer) {
      quizCtx.submitAnswer(question.text, answer, true);
    } else {
      quizCtx.submitAnswer(question.text, answer, false);
    }

    // need to figure out why skipped isn't showing on summary.
    quizCtx.nextQuestion();
    setRemainingTime(maxTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    const timerTimeout = setTimeout(() => {
      handleSubmitAnswer("");
    }, timer);

    return () => {
      clearInterval(interval);
      clearTimeout(timerTimeout);
    };
  }, [handleSubmitAnswer, timer]);

  return (
    <div id="question">
      <h2>{question.text}</h2>
      <progress value={timer} max={maxTime} />
      <ul id="answers">
        {question.answers.map((answer, index) => (
          <Answer
            onSubmitAnswer={handleSubmitAnswer}
            answer={answer}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

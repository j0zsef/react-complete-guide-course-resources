import Answer from "./Answer.jsx";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext.jsx";

export default function Question({ question }) {
  const quizCtx = useContext(QuizContext);
  const handleSubmitAnswer = function (answer) {
    if (quizCtx.currentQuestion.question.correctAnswer === answer) {
      quizCtx.submitAnswer(question.text, answer, true);
    } else {
      quizCtx.submitAnswer(question.text, answer, false);
    }

    quizCtx.nextQuestion();
  };

  //need to add progress bar for skipping questions

  return (
    <div id="question">
      <h2>{question.text}</h2>
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

import Question from "./Question.jsx";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const quizCtx = useContext(QuizContext);
  let showSummary = false;
  if (quizCtx.currentQuestion.index >= quizCtx.questions.length) {
    showSummary = true;
  }
  return (
    <div id="quiz">
      {!showSummary && <Question question={quizCtx.currentQuestion.question} />}
      {showSummary && <Summary answers={quizCtx.answers} />}
    </div>
  );
}

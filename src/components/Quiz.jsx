import Question from "./Question.jsx";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const quizCtx = useContext(QuizContext);
  //need to add some logic here to show the summary once the Quiz is over
  return (
    <div id="quiz">
      <Question question={quizCtx.currentQuestion.question} />
      <Summary
        skipped={quizCtx.skipped}
        correct={quizCtx.correct}
        incorrect={quizCtx.incorrect}
      />
    </div>
  );
}

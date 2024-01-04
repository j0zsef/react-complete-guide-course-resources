import Question from "./Question.jsx";
import { useContext } from "react";
import { QuizContext } from "../store/QuizContext.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const quizCtx = useContext(QuizContext);
  let content;
  if (quizCtx.currentQuestion.index >= quizCtx.questions.length) {
    content = <Summary answers={quizCtx.answers} />;
  } else {
    content = (
      <Question
        key={quizCtx.currentQuestion.index}
        question={quizCtx.currentQuestion.question}
      />
    );
  }
  return <div id="quiz">{content}</div>;
}

import Quiz from "./components/Quiz.jsx";
import QuizSummary from "./components/QuizSummary.jsx";
import questions from "./questions.js";

export default function App() {
  return (
    <>
      <Quiz questions={questions} />
      <QuizSummary />
    </>
  );
}

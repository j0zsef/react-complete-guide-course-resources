import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";
import { QuizContext, QuizContextProvider } from "./store/QuizContext.jsx";
import { useContext } from "react";

export default function App() {
  return (
    <>
      <QuizContextProvider>
        <Quiz />
      </QuizContextProvider>
    </>
  );
}

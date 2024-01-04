import Quiz from "./components/Quiz.jsx";
import { QuizContextProvider } from "./store/QuizContext.jsx";

export default function App() {
  return (
    <>
      <QuizContextProvider>
        <main>
          <Quiz />
        </main>
      </QuizContextProvider>
    </>
  );
}

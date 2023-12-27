import { createContext } from "react";

export const QuizContext = createContext({
  questions: [],
  currentQuestion: {},
  showSummary: false,
});

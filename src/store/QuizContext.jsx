import { createContext, useReducer } from "react";
import questions from "../questions.js";

export const QuizContext = createContext({
  currentQuestion: {
    question: {},
    index: 0,
  },
  submitAnswer: () => {},
  skipped: 0,
  correct: 0,
  incorrect: 0,
});

function quizReducer(state, action) {
  if (action.type === "SUBMIT_ANSWER") {
    state.index++;
    return {
      index: state.currentQuestionIndex,
      question: questions[state.currentQuestionIndex],
    };
  }
  return state;
}

export function QuizContextProvider({ children }) {
  const [currentQuestionState, quizDispatch] = useReducer(quizReducer, {
    question: questions[0],
    index: 0,
  });

  function handleSubmitAnswer() {
    quizDispatch({
      type: "SUBMIT_ANSWER",
    });
  }

  const ctxValue = {
    currentQuestion: currentQuestionState,
    submitAnswer: handleSubmitAnswer,
    skipped: 0,
    correct: 0,
    incorrect: 0,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}

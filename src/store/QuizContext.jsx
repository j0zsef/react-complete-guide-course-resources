import { createContext, useReducer, useState } from "react";
import questions from "../questions.js";

export const QuizContext = createContext({
  currentQuestion: {
    question: {},
    index: 0,
  },
  submitAnswer: () => {},
  questions: [],
  skipped: 0,
  correct: 0,
  incorrect: 0,
});

function quizReducer(state, action) {
  if (action.type === "SUBMIT_ANSWER") {
    let index = state.index;
    index++;
    let question = questions[index];
    return {
      index,
      question,
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
    questions: questions,
    skipped: 0,
    correct: 0,
    incorrect: 0,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}

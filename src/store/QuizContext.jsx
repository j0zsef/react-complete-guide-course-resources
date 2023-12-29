import { createContext, useReducer, useState } from "react";
import questions from "../questions.js";

export const QuizContext = createContext({
  currentQuestion: {
    question: {},
    index: 0,
  },
  nextQuestion: () => {},
  submitAnswer: () => {},
  questions: [],
  answers: [],
});

function quizReducer(state, action) {
  if (action.type === "NEXT_QUESTION") {
    let index = state.index;
    index++;
    let question = questions[index];
    return {
      index,
      question,
    };
  }

  if (action.type === "SUBMIT_ANSWER") {
    let answers = [...state];
    let newAnswer = action.payload;
    answers.push(newAnswer);
    return answers;
  }

  return state;
}

export function QuizContextProvider({ children }) {
  const [currentQuestionState, currentQuestioDispatch] = useReducer(
    quizReducer,
    {
      question: questions[0],
      index: 0,
    },
  );

  function handleNextQuestion() {
    currentQuestioDispatch({
      type: "NEXT_QUESTION",
    });
  }

  const [answersState, answersDispatch] = useReducer(quizReducer, []);

  function handleSubmitAnswer(question, answer, correct) {
    answersDispatch({
      type: "SUBMIT_ANSWER",
      payload: {
        question,
        answer,
        correct,
      },
    });
  }

  const ctxValue = {
    currentQuestion: currentQuestionState,
    nextQuestion: handleNextQuestion,
    submitAnswer: handleSubmitAnswer,
    questions: questions,
    answers: answersState,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}

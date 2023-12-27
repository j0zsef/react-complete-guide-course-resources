import Question from "./Question.jsx";

export default function Quiz({ questions }) {
  return (
    <div id="quiz">
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
}

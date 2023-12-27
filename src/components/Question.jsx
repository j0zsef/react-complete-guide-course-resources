import QuestionAnswer from "./QuizAnswer.jsx";

export default function Question({ question }) {
  return (
    <div key={question.id} id="question">
      <h2>{question.text}</h2>
      <ul id="answers">
        {question.answers.map((answer) => (
          <QuestionAnswer answer={answer} />
        ))}
      </ul>
    </div>
  );
}

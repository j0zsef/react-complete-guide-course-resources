export default function QuestionAnswer({ answer, questionSubmit }) {
  return (
    <li className="answer">
      <button onClick={questionSubmit}>{answer}</button>
    </li>
  );
}

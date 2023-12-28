export default function Answer({ answer, onSubmitAnswer }) {
  const handleSubmitAnswer = function () {
    onSubmitAnswer(answer);
  };

  return (
    <li className="answer">
      <button onClick={handleSubmitAnswer}>{answer}</button>
    </li>
  );
}

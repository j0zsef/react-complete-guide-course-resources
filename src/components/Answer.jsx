export default function Answer({ answer, onSubmitAnswer, index }) {
  const handleSubmitAnswer = function () {
    onSubmitAnswer(answer);
  };

  return (
    <li key={index} className="answer">
      <button onClick={handleSubmitAnswer}>{answer}</button>
    </li>
  );
}

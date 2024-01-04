import completeIcon from "../assets/quiz-complete.png";

export default function Summary({ answers }) {
  const skippedCount =
    (answers.filter((answer) => answer.answer === "").length / answers.length) *
    100;
  const correctCount =
    (answers.filter((answer) => answer.answer !== "" && answer.correct).length /
      answers.length) *
    100;
  const incorrectCount =
    (answers.filter((answer) => answer.answer !== "" && !answer.correct)
      .length /
      answers.length) *
    100;
  return (
    <div id="summary">
      <img src={completeIcon} alt="" />
      <h2>QUIZ COMPLETED!</h2>
      <div id="summary-stats">
        <p id="skipped">
          <span className="number">{Math.round(skippedCount)}%</span>
          <span className="text">SKIPPED</span>
        </p>
        <p id="correct">
          <span className="number">{Math.round(correctCount)}%</span>
          <span className="text">ANSWERED CORRECTLY</span>
        </p>
        <p id="incorrect">
          <span className="number">{Math.round(incorrectCount)}%</span>
          <div className="text">ANSWERED INCORRECTLY</div>
        </p>
      </div>
      <div id="answers">
        <ol>
          {answers.map((answer, index) => (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{answer.question}</p>
              {answer.answer === "" && (
                <p className="user-answer skipped">SKIPPED</p>
              )}
              {answer.answer !== "" && answer.correct && (
                <p className="user-answer correct">{answer.answer}</p>
              )}
              {answer.answer !== "" && !answer.correct && (
                <p className="user-answer wrong">{answer.answer}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

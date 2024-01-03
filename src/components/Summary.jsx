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
        <div id="skipped">
          <div className="number">{Math.round(skippedCount)}%</div>
          <div className="text">SKIPPED</div>
        </div>
        <div id="correct">
          <div className="number">{Math.round(correctCount)}%</div>
          <div className="text">ANSWERED CORRECTLY</div>
        </div>
        <div id="incorrect">
          <div className="number">{Math.round(incorrectCount)}%</div>
          <div className="text">ANSWERED INCORRECTLY</div>
        </div>
      </div>
      <div id="answers">
        <ol>
          {answers.map((answer, index) => (
            <li key={index}>
              {index + 1}
              <div className="question">{answer.question}</div>
              {answer.answer === "" && (
                <div className="user-answer skipped">SKIPPED</div>
              )}
              {answer.answer !== "" && answer.correct && (
                <div className="user-answer correct">{answer.answer}</div>
              )}
              {answer.answer !== "" && !answer.correct && (
                <div className="user-answer wrong">{answer.answer}</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

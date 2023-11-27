import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  function handleStart() {
    timer.current = setTimeout(function () {
      setTimerExpired(true);
      setTimerStart(false);
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStart ? "active" : undefined}>
        Timer is {timerStart ? "active" : "inactive"}
      </p>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CountDownTimer = () => {
  const [second, setSecond] = useState(5);
  const [showPause, setShowPause] = useState(false);
  const intervalRef = useRef(null);

  function startInterval() {
    if (intervalRef.current === null) {
      setShowPause(true);
      intervalRef.current = setInterval(() => {
        setSecond((prev) => {
          if (prev < 1) {
            clearInterval(intervalRef.current);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setShowPause(false);
    }
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div className="home-container">
      <div className="timer-wrapper">
        <h2>Countdown goes on --</h2>
        <h1>{second}</h1>
        <div className="flex space-x-8">
          <button
            disabled={second === 0 ? true : false}
            className="btn"
            onClick={startInterval}
          >
            {showPause && second !== 0 ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;

import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CountDownTimer = () => {
  const [second, setSecond] = useState(5);
  const intervalRef = useRef(null);

  function startInterval() {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => {
          if (prev < 1) {
            clearInterval(intervalRef.current);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }

  function stopInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
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
          <button className="btn" onClick={startInterval}>
            start
          </button>
          <button className="btn" onClick={stopInterval}>
            stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;

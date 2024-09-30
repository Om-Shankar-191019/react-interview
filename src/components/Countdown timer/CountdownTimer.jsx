import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CountDownTimer = () => {
  const [second, setSecond] = useState(5);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecond((prev) => {
        if (prev < 1) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div className="home-container">
      <div className="timer-wrapper">
        <h2>Countdown goes on --</h2>
        <h1>{second}</h1>
      </div>
    </div>
  );
};

export default CountDownTimer;

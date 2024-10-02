// =================== correct way ======================================
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CountDownTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [showPause, setShowPause] = useState(false);
  const intervalRef = useRef(null);

  const calculateTimeLeft = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  const startInterval = () => {
    if (intervalRef.current === null) {
      setShowPause(true);
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => {
          if (prevTotalSeconds <= 0) {
            clearInterval(intervalRef.current);
            setShowPause(false);
            return 0;
          }
          return prevTotalSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setShowPause(false);
    }
  };

  const handleSecondInput = (e) => {
    let inputValue = parseInt(e.target.value) || 0;
    inputValue = Math.max(inputValue, 0); // Ensure it's not negative
    const timeLeft = calculateTimeLeft();
    const newTotalSeconds =
      timeLeft.hours * 3600 + timeLeft.minutes * 60 + inputValue;
    setTotalSeconds(newTotalSeconds);
  };

  const handleMinuteInput = (e) => {
    let inputValue = parseInt(e.target.value) || 0;
    inputValue = Math.max(inputValue, 0); // Ensure it's not negative
    const timeLeft = calculateTimeLeft();
    const newTotalSeconds =
      timeLeft.hours * 3600 + inputValue * 60 + timeLeft.seconds;
    setTotalSeconds(newTotalSeconds);
  };

  const handleHourInput = (e) => {
    let inputValue = parseInt(e.target.value) || 0;
    inputValue = Math.max(inputValue, 0); // Ensure it's not negative
    const timeLeft = calculateTimeLeft();
    const newTotalSeconds =
      inputValue * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    setTotalSeconds(newTotalSeconds);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const timeLeft = calculateTimeLeft();

  return (
    <div className="home-container">
      <div className="timer-wrapper">
        <h2>Countdown Timer</h2>
        <div className="flex space-x-4">
          <div>
            <h1>Hours</h1>
            <input
              type="number"
              value={timeLeft.hours}
              onChange={handleHourInput}
              placeholder="00"
            />
          </div>
          <div>
            <h1>Minutes</h1>
            <input
              type="number"
              value={timeLeft.minutes}
              onChange={handleMinuteInput}
              placeholder="00"
            />
          </div>
          <div>
            <h1>Seconds</h1>
            <input
              type="number"
              value={timeLeft.seconds}
              onChange={handleSecondInput}
              placeholder="00"
            />
          </div>
        </div>
        <div className="flex space-x-8">
          <button
            disabled={totalSeconds === 0}
            className="btn"
            onClick={startInterval}
          >
            {showPause ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;

// ======================== wrong way =================================
// multiple state updates creates problem and render wrong data (does not decrement minutes and hours as expected)
// --------------------------------------------------------------------

// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";

// const CountDownTimer = () => {
//   const [second, setSecond] = useState(0);
//   const [minute, setMinute] = useState(0);
//   const [hour, setHour] = useState(0);
//   const [showPause, setShowPause] = useState(false);
//   const intervalRef = useRef(null);

//   function startInterval() {
//     if (intervalRef.current === null) {
//       setShowPause(true);
//       intervalRef.current = setInterval(() => {
//         setSecond((prev) => {
//           if (prev < 1) {
//             if (minute > 1) {
//               setMinute((prev) => prev - 1);
//               return prev + 60;
//             }

//             clearInterval(intervalRef.current);
//             return prev;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//       setShowPause(false);
//     }
//   }

//   function handleSecondInput(e) {
//     let inputValue = e.target.value;
//     if (inputValue < 0) setSecond(0);
//     else setSecond(inputValue);

//     // console.log(inputValue);
//   }
//   function handleMinuteInput(e) {
//     let inputValue = e.target.value;
//     if (inputValue < 0) setMinute(0);
//     else setMinute(inputValue);
//   }
//   function handleHourInput(e) {
//     let inputValue = e.target.value;
//     if (inputValue < 0) setHour(0);
//     else setHour(inputValue);
//   }

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);
//   return (
//     <div className="home-container">
//       <div className="timer-wrapper">
//         <h2>Countdown goes on --</h2>
//         <div className="flex space-x-4">
//           <div>
//             <h1>Hours</h1>
//             <input
//               type="number"
//               value={hour}
//               onChange={handleHourInput}
//               placeholder="00"
//             />
//           </div>
//           <div>
//             <h1>Minutes</h1>
//             <input
//               type="number"
//               value={minute}
//               onChange={handleMinuteInput}
//               placeholder="00"
//             />
//           </div>
//           <div>
//             <h1>Seconds</h1>
//             <input
//               type="number"
//               value={second}
//               onChange={handleSecondInput}
//               placeholder="00"
//             />
//           </div>
//         </div>
//         <div className="flex space-x-8">
//           <button
//             disabled={second === 0 ? true : false}
//             className="btn"
//             onClick={startInterval}
//           >
//             {showPause && second !== 0 ? "Pause" : "Start"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountDownTimer;

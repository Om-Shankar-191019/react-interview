// problem statement
// make a rectangle box with some color filled. make 3 buttons. on click of each button , if same color code is clicked , show "correct answer" else "wrong answer". if answer is correct, change the color.

import { useEffect, useState } from "react";
import "./style.css";

const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, "A", "B", "C", "D", "E", "F"];
export default function GuessColor() {
  const [colorState, setColorState] = useState(null);

  function getRandom(start, end) {
    return Math.floor(Math.random() * (end + 1 - start)) + start;
  }

  function buildColor(colorArr) {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let random = getRandom(0, colorArr.length - 1);
      hex += colorArr[random];
    }
    return hex;
  }

  function threeColors() {
    let three = [];
    for (let i = 0; i < 3; i++) {
      let color = buildColor(colorArr);
      three.push(color);
    }
    let result = three[getRandom(0, three.length - 1)];
    return {
      colors: three,
      result: result,
      answer: "",
    };
  }

  useEffect(() => {
    let newColor = threeColors();
    setColorState((prev) => {
      return { ...prev, ...newColor };
    });
  }, []);

  function handleClick(btnColor) {
    if (btnColor !== colorState.result) {
      setColorState((prev) => {
        return { ...prev, ["answer"]: "wrong answer" };
      });
    } else {
      let newThreeColors = threeColors();
      setColorState((prev) => {
        return {
          ...prev,
          ["answer"]: "correct answer",
          ["colors"]: newThreeColors.colors,
          ["result"]: newThreeColors.result,
        };
      });
    }
  }
  return (
    <div className="outer-div">
      <h1>Guess the color</h1>
      <div
        className="color-box"
        style={colorState && { backgroundColor: `${colorState.result}` }}
      ></div>
      <div style={{ display: "flex", margin: "12px" }}>
        {colorState &&
          colorState.colors.map((color, index) => {
            return (
              <button
                key={`color - ${index}`}
                onClick={() => handleClick(color)}
              >
                {color}
              </button>
            );
          })}
      </div>
      <p>{colorState && colorState.answer}</p>
    </div>
  );
}

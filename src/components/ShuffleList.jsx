// problem statement :
// Shuffle array each time on button click and render them.

import { useState } from "react";

const fruits = ["apple", "Banana", "Guava", "pineapple"];
function ShuffleList() {
  const [items, setItems] = useState(fruits);

  function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let r = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[r];
      arr[r] = temp;
    }
    return arr;
  }
  const handleShuffle = () => {
    let result = [...fruits];
    let r = shuffleArray(result);
    setItems(r);
  };
  return (
    <>
      <ul>
        {items.map((fruit, index) => {
          return <li key={`${index} - fruit`}>{fruit}</li>;
        })}
      </ul>
      <button onClick={handleShuffle}>shuffle</button>
    </>
  );
}

export default ShuffleList;

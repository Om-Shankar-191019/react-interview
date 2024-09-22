import react, { useState } from "react";

const Child = ({ setApiId }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setApiId(inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type any ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;

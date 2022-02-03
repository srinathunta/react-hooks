import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("Dummy");

  const increment = () => {
    setCounter(counter + 1);
  };

  function inputChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h3>UseState</h3>
      <h4>Counter</h4>
      {counter}
      <button onClick={increment}>Increase</button>
      <br />
      <br />
      <br />

      <h4>Input</h4>
      <input type="text" onChange={inputChange} />
      {input}
    </div>
  );
};

export default StateHook;

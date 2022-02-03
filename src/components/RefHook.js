import React, { useRef, useState } from "react";

const RefHook = () => {
  const [inputted, setInputted] = useState("");
  const inputbox = useRef(null);

  function onClick() {
    setInputted(inputbox.current.value);
    inputbox.current.value = "";
  }

  return (
    <div>
      <h3>RefHook</h3>
      <h2>{inputted}</h2>
      <input placeholder="ex..." ref={inputbox} />
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default RefHook;

import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter * 2, showValue: state.showValue };
    case "HIDETEXT":
      return { counter: state.counter, showValue: !state.showValue };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 2,
    showValue: true,
  });

  function changeAll() {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "HIDETEXT" });
  }
  return (
    <div>
      <h3>useReducer</h3>
      <h2>{state.counter}</h2>
      <button onClick={changeAll}>Click me!</button>
      <h2>{state.showValue && "This is a text"}</h2>
    </div>
  );
};

export default ReducerHook;

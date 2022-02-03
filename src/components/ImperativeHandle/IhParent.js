import React, { useRef } from "react";
import IhChild from "./IhChild";

const IhParent = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => buttonRef.current.alterText()}>
        Button from Parent
      </button>
      <IhChild ref={buttonRef} />
    </div>
  );
};

export default IhParent;

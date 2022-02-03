import React, { forwardRef, useImperativeHandle, useState } from "react";

const IhChild = forwardRef((props, ref) => {
  const [showText, setShowText] = useState(true);

  useImperativeHandle(ref, () => ({
    alterText() {
      setShowText(!showText);
    },
  }));

  return (
    <div>
      <button>Button from child</button>
      {showText && <p>Text is now visible</p>}
    </div>
  );
});

export default IhChild;

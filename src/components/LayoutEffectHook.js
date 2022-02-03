import React from "react";

const LayoutEffectHook = () => {
  return (
    <div>
      <h3>useLayoutEffect</h3>
      <p>
        The signature is identical to useEffect, but it fires synchronously
        after all DOM mutations. Use this to read layout from the DOM and
        synchronously re-render. Updates scheduled inside useLayoutEffect will
        be flushed synchronously, before the browser has a chance to paint.
      </p>
    </div>
  );
};

export default LayoutEffectHook;

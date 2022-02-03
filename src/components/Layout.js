import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div>
      <h1>All Routes</h1>
      <nav>
        <Link to="usestate">useState</Link>
        <Link to="usereducer">useReducer</Link>
        <Link to="useeffect">useEffect</Link>
        <Link to="useref">useRef</Link>
        <Link to="uselayouteffect">useLayoutEffect</Link>
        <Link to="useimperativehandle">useImperativeHandle</Link>
        <Link to="usecontext">useContext</Link>
        <Link to="usememo">useMemo</Link>
        <Link to="usecallback">useCallback</Link>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;

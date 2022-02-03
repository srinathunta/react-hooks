import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h3>useEffect</h3>
      <ul>
        {data.map((comment) => {
          return <li>{comment.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default EffectHook;

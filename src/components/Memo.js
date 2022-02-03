import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

const Memo = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, [data]);

  function getLongestName(comments) {
    let longestname = "";

    for (let i = 0; i < comments.length; i++) {
      let currentname = comments[i].name;
      if (currentname.length > longestname.length) {
        longestname = currentname;
      }
    }
    return longestname;
  }
  const longestName = useMemo(() => getLongestName(data), [data]);
  return (
    <div>
      <h3>useMemo Hook</h3>
      <p>{longestName}</p>
    </div>
  );
};

export default Memo;

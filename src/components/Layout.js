import React, { useState, useEffect, useLayoutEffect } from "react";

function Layout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //effect
    console.log("i'm in useEffect 1");
  }, [count]);
  useLayoutEffect(() => {
    //effect
    console.log("i'm in useLayoutEffect");
  }, [count]);

  console.log("Render");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Layout;

import React, { useState } from "react";

function Count(props) {
  const [count, setCount] = useState(0);
  let id; //undefined

  console.log(id); //undefined

  const changeCount = () => {
    id = setInterval(() => {
      //1
      //1
      setCount((count) => count + 1);
      console.log(id);
    }, 1000);
  };

  const stopCount = () => {
    clearInterval(id);
  };

  return (
    <div>
      <h2>Count Value is {count}</h2>
      <button onClick={changeCount}>Start</button>&nbsp;
      <button onClick={stopCount}>Stop</button>
    </div>
  );
}

export default Count;

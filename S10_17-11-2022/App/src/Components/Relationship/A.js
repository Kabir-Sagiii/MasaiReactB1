import React, { useState, useRef } from "react";
import B from "./B";

function A(props) {
  const [state, setState] = useState("");
  let inputRef = useRef(null);
  const sendDataToB = () => {
    setState(inputRef.current.value);
  };
  return (
    <div>
      <h2>A Component</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Text"
        // onChange={(e) => {
        //   setState(e.target.value);
        // }}
      />
      <button onClick={sendDataToB}>Send Data to B</button>
      <B info={state} />
    </div>
  );
}

export default A;

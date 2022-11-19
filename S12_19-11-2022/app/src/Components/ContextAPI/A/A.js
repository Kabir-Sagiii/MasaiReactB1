import React, { useState, useRef } from "react";
import B from "../B/B";
import myContext from "../Context/Context";

function A(props) {
  const [state, setState] = useState("");
  let inputRef = useRef(null);
  const sendDataToB = () => {
    setState(inputRef.current.value);
  };
  return (
    <div>
      <h2>A Component</h2>
      <input ref={inputRef} type="text" placeholder="Enter Text" />
      <button onClick={sendDataToB}>Send Data to B</button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;

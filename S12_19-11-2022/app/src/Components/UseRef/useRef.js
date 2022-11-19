import React, { useRef, useState } from "react";

function UseRef(props) {
  const [state, setState] = useState(0);
  let id = 1; //recreated
  let reference = useRef(null); //{current:"Kabir"}

  const changeColor = () => {
    reference.current.style.color = "red";
  };

  return (
    <div>
      <h1 ref={reference}>Useref is attached</h1>
      <h2>
        {state} useRef {id} Value is {reference.current}
      </h2>
      <button
        onClick={() => {
          setState(state + 1);
          //   reference.current = "Masai";
          id = 5;
        }}
      >
        Update State
      </button>
      <button onClick={changeColor}>Change h1 Color</button>
      <button
        onClick={() => {
          reference.current = "Raj";
        }}
      >
        Update useRef
      </button>
    </div>
  );
}

export default UseRef;

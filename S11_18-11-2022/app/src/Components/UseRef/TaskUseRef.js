import React, { useRef, useState } from "react";

function TaskUseRef(props) {
  //   const [count, setCount] = useState(0);
  var reference = useRef(null); // {current:null}  //
  var inputRef = useRef(null); //{current:null}

  //   let id; //re-creating  //undefined
  //   console.log(reference.current); // null

  //   const startCount = () => {
  //     reference.current = setInterval(() => {
  //       setCount((state) => state + 1);
  //     }, 1000);
  //   };

  //   const stopCount = () => {
  //     clearInterval(reference.current); //1
  //   };

  const changeColor = () => {
    reference.current.style.color = "red";
  };

  const changeBColor = () => {
    reference.current.style.backgroundColor = "green";
    reference.current.style.padding = "10px";
    reference.current.innerText = "Changed the Content of h2";
  };

  const changeContent = () => {
    reference.current.innerText = inputRef.current.value;
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <input type="text" placeholder="Enter Some Text" ref={inputRef} />
      <h2 ref={reference}>Count value is 100</h2>

      {/* <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button> */}

      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeBColor}>Change Style</button>
      <button onClick={changeContent}>Update h2 Content</button>
    </div>
  );
}

export default TaskUseRef;

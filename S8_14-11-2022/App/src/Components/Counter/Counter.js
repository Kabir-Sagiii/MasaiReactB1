import { useEffect, useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect callback is Called");

    return () => {
      alert("Removing Component from the DOM");
    };
  });

  function increaseCount() {
    setCounter((pendingState) => pendingState + 1); //Asynchronous // counter = 1
    // setCounter((pendingState) => pendingState + 1);
    // setCounter((pendingState) => pendingState + 1); //3

    // console.log(counter); //0
    // console.log("React"); //React
  }

  return (
    <div>
      <h1 style={{ color: "green" }}>Counter App</h1>

      <h3>Count value is :{counter}</h3>
      <button disabled={counter >= 20 ? true : false} onClick={increaseCount}>
        Increase Count
      </button>
      <button
        disabled={counter === 0 ? true : false}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease Count
      </button>
    </div>
  );
}

export default Counter;

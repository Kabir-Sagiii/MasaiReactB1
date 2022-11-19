import { useEffect, useState } from "react";

function UseEffect(props) {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("Delhi");

  //   useEffect(() => {
  //     console.log("useEffect callback is called");
  //   }, [count, city]);

  useEffect(() => {
    document.title = `Count Value ${count} `;
    console.log("useEffect callback is called");
    return () => {};
  });

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const updateCity = () => {
    setCity("Hyderabad");
  };

  return (
    <div>
      {/* {console.log("Hello JSX")} */}
      <h2>useEffect hook is from {city}</h2>
      <h3>Count value is {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  );
}

export default UseEffect;

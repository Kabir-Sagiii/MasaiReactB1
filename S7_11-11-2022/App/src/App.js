import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import APIProduct from "./Components/ProductList/APIProduct";
import Counter from "./Components/Counter/Counter";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Nav />
      {/* <APIProduct /> */}

      {state ? <Counter /> : <h2>Counter Component is Unmounted</h2>}

      <button
        onClick={() => {
          setState(true);
        }}
        style={{ marginTop: "50px" }}
      >
        Load Counter Component
      </button>

      <button
        onClick={() => {
          setState(false);
        }}
        style={{ marginTop: "50px" }}
      >
        Remove Counter Component
      </button>
    </div>
  );
}

export default App;

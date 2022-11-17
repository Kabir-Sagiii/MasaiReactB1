import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import APIProduct from "./Components/ProductList/APIProduct";
import Counter from "./Components/Counter/Counter";
import UseEffect from "./Components/UseEffect/UseEffect";
import Count from "./Components/Count/Count";
import UseRef from "./Components/UseRef/useRef";
import TaskUseRef from "./Components/UseRef/TaskUseRef";
// import A from "./Components/Relationship/A";
import A from "./Components/ContextAPI/A/A";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Nav />
      {/* <UseEffect /> */}
      {/* <APIProduct /> */}
      {/* <Count /> */}
      {/* <UseRef /> */}
      {/* <TaskUseRef /> */}
      <A />
    </div>
  );
}

export default App;

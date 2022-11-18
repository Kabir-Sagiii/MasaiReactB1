import React, { useContext } from "react";
import C from "../C/C";
import myContext from "../Context/Context";

function B(props) {
  const data = useContext(myContext);
  return (
    <div>
      <h2>B Component</h2>
      <p>{data}</p>
      <C />
    </div>
  );
}

export default B;

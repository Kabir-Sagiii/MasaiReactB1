import React, { useContext } from "react";
import D from "../D/D";
import myContext from "../Context/Context";

function C(props) {
  const data = useContext(myContext);
  return (
    <div>
      <h2>C Component</h2>
      {console.log("C is re-rendered")}
      <h4>{data.c}</h4>
      <D />
    </div>
  );
}

export default C;

import React from "react";
import D from "./D";

function C(props) {
  return (
    <div>
      <h2>C Component</h2>
      <h4>{props.msg}</h4>
      <D info={props.msg} />
    </div>
  );
}

export default C;

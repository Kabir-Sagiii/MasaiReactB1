import React from "react";
import C from "./C";

function B(props) {
  return (
    <div>
      <h2>B Component</h2>
      <p>{props.info}</p>
      <C msg={props.info1} />
    </div>
  );
}

export default B;

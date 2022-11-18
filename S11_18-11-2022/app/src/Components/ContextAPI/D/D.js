import React, { useContext } from "react";
import myContext from "../Context/Context";

function D(props) {
  const contextData = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>{contextData}</p>
    </div>
  );
}

export default D;

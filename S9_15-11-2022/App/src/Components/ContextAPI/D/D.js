import React, { useContext } from "react";
import myContext from "../Context/Context";

function D(props) {
  const data = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      {console.log("D is re-rendered")}
      <p>{data.d}</p>
    </div>
  );
}

export default D;

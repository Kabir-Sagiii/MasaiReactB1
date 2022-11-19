import React from "react";

function Pagenotfound(props) {
  const style = {
    color: "red",
    textAlign: "center",
    marginTop: "100px",
  };
  return (
    <div style={style}>
      <h1>Page not found on given path</h1>
    </div>
  );
}

export default Pagenotfound;

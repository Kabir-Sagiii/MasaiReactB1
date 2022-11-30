import React from "react";

function Button({
  name = "Default Button", // Component Button, props,    //component --- props ---values,hooks
  color,
  bgColor,
  padding,
  border,
  margin,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
        padding: padding,
        border: border,
        margin: margin,
      }}
    >
      {name}
    </button>
  );
}

export default Button;

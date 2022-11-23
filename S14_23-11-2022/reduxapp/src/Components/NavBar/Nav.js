import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav">
      <a to="/">Home</a>
      <a to="/profile">Users</a>
      <a to="/products">Count</a>
      <a to="/users">Todo</a>
      <a to="/contact">Contact</a>
    </div>
  );
}

export default Nav;

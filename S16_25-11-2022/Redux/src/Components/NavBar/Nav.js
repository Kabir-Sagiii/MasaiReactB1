import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">Redux</Link>
      <Link to="/elec">Electronics</Link>
      <Link to="/jewelery">Jewelery</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Nav;

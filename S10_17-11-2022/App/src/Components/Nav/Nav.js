import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Nav;

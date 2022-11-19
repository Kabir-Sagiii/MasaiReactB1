import React from "react";
import "./Products.css";
import { Link, Outlet } from "react-router-dom";

function Products(props) {
  var links = [
    {
      path: "electronic",
      title: "Electronics",
    },
    {
      path: "jewelery",
      title: "Jewelery's",
    },
    {
      path: "mensc",
      title: "MensClothing",
    },
    {
      path: "womensc",
      title: "Women'sClothing",
    },
  ];

  return (
    <div className="categoryContainer">
      <div className="linkContainer">
        {links.map((link, index) => (
          <Link to={link.path}>{link.title}</Link>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;

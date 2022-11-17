import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Router/Home";
import Profile from "./Components/Router/Profile";
import Products from "./Components/Router/Products";
import Users from "./Components/Router/Users";
import Contact from "./Components/Router/Contact";
import { Route, Routes } from "react-router-dom";
import Pagenotfound from "./Components/Router/Pagenotfound";
import APIProduct from "./Components/ProductList/APIProduct";
import Product from "./Components/ProductList/Product";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Product />} />
        <Route path="/users" element={<APIProduct />} />
        <Route path="/html" element={<h2>Custome tag</h2>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;

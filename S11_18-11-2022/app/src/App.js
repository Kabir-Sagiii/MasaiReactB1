import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Router/Home";
import Profile from "./Components/Router/Profile";
import Products from "./Components/Router/Products";

import User from "./Components/Router/User";
import Contact from "./Components/Router/Contact";
import { Route, Routes, Navigate } from "react-router-dom";
import Pagenotfound from "./Components/Router/Pagenotfound";

import Electronic from "./Components/Router/Electronic";
import Jewelery from "./Components/Router/Jewelery";
import ProductDetails from "./Components/Router/ProductDetails";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronic" />} />

          <Route path="electronic" element={<Electronic />} />
          <Route path="jewelery" element={<Jewelery />} />
        </Route>

        <Route path="/users" element={<User />} />
        <Route path="/html" element={<h2>Custome tag</h2>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/jewelery" element={<Jewelery />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;

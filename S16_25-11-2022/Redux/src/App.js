import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/NavBar/Nav";
import NewUser from "./Components/User/NewUser";
import Users from "./Components/User/Users";
import Electronic from "./Components/Products/Electronic";
import { Routes, Route } from "react-router-dom";
import ProducEDetails from "./Components/Products/ProducEDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NewUser />
              <Users />
            </div>
          }
        />
        <Route path="/elec" element={<Electronic />} />
        <Route path="/productDetails/:id" element={<ProducEDetails />} />
      </Routes>
    </div>
  );
}

export default App;

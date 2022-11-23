import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/NavBar/Nav";
import NewUser from "./Components/User/NewUser";
import Users from "./Components/User/Users";

function App() {
  return (
    <div className="App">
      <Nav />
      <NewUser />
      <Users />
    </div>
  );
}

export default App;

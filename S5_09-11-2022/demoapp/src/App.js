import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ChatHome from "./Components/ChatApp/ChatHome/ChatHome";

function App() {
  return (
    <div className="App">
      {/* <h2>App Component</h2>
      <Header />
      <Header /> */}
      <ChatHome />
    </div>
  );
}

export default App;

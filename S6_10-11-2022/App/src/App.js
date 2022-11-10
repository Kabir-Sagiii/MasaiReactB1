import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ChatHome from "./Components/ChatApp/ChatHome/ChatHome";
import Product from "./Components/ProductList/Product";
import APIProduct from "./Components/ProductList/APIProduct";

function App() {
  return (
    <div className="App">
      {/* <h2>App Component</h2>
      <Header />
      <Header /> */}
      {/* <ChatHome /> */}
      {/* <Product /> */}
      <APIProduct />
    </div>
  );
}

export default App;

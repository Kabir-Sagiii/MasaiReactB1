import React from "react";
import Client from "../Client/Client";
import Server from "../Server/Server";
import "./ChatHome.css";

function ChatHome(props) {
  return (
    <div className="container">
      {/* <h3>Home Component</h3> */}
      <div className="home">
        <Client />
        <Server />
      </div>
    </div>
  );
}

export default ChatHome;

import React, { useState } from "react";
import { userAction } from "../../Actions/userAction";
import { useDispatch } from "react-redux";

function NewUser(props) {
  const [userData, setUserData] = useState("Kabir");
  const dispatch = useDispatch();

  const sendDataToUserAction = () => {
    userAction(userData, dispatch);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Enter User"
        value={userData}
        onChange={(event) => {
          setUserData(event.target.value);
        }}
      />
      <button onClick={sendDataToUserAction}>Submit</button>
    </div>
  );
}

export default NewUser;

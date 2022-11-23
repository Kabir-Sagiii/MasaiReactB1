import React from "react";
import { useSelector } from "react-redux";

function Users(props) {
  const usersdata = useSelector((storeData) => {
    return storeData.users;
  });
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User Component</h2>
      {usersdata.length > 0 ? (
        <div>
          <table style={{ margin: "auto", width: "30px" }}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {usersdata.map((ele, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{ele}</td>
                    <td>
                      <button>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ color: "red", textAlign: "center" }}>
          {" "}
          <h2>No Data</h2>
        </div>
      )}
    </div>
  );
}

export default Users;

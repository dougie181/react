import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/Helpers/Wrapper";

const initialUserList = [];
//   {
//     id: "1",
//     name: "Dougie",
//     age: 54,
//   },
//   {
//     id: "2",
//     name: "Michelle",
//     age: 52,
//   },
// ];

function App() {
  const [users, setUsers] = useState(initialUserList);

  const newUserHandler = (newUserData) => {
    console.log(newUserData);
    setUsers((prevUsers) => {
      const updatedUserList = [...prevUsers, newUserData];
      return updatedUserList;
    });
  };

  return (
    <Wrapper>
      <AddUser onNewUser={newUserHandler} />
      <UserList listOfUsers={users} />
    </Wrapper>
  );
}

export default App;

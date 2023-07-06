import React from "react";
import Users from "./components/Users/Users";

const usersList = [
  {
    id: 1,
    key: 1,
    name: "User 1",
    phone: "1234567890",
  },
  {
    id: 2,
    key: 2,
    name: "User 2",
    phone: "9876543210",
  },
];

const App = () => {
  return (
    <div>
      <h1 data-testid="heading">Testing Demo</h1>
      <Users usersList={usersList} />
    </div>
  );
};

export default App;

import React from "react";
import User from "./User/User";

const Users = ({ usersList }) => {
  return (
    <div>
      <div data-testid="user-details-heading">User Details: </div>

      {usersList?.map((user) => (
        <User key={user.key} user={user} />
      ))}
    </div>
  );
};

export default Users;

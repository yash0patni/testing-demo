import React from "react";

const User = ({ user }) => {
  const { id, name, phone } = user;

  return (
    <div className="user">
      <p data-testid="user-id">{id}</p>
      <p data-testid="user-name">{name}</p>
      <p data-testid="user-phone">{phone}</p>
    </div>
  );
};

export default User;

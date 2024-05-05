import React from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const makePostRequest = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  return (
    <UserContext.Provider value={{ makePostRequest }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;

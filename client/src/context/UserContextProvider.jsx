import React from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ nvalue: null }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;

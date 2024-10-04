import React, { useState, useContext, createContext } from "react";

const AuthContextType = {
  user: "",
  signin: null,
  signout: null,
};
const AuthContext = createContext(AuthContextType);

export function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let signin = (newUser, callback) => {
    setUser(newUser);
    if (typeof callback === "function") {
      callback();
    }
  };

  let signout = (callback) => {
    setUser(null);
    if (typeof callback === "function") {
      callback();
    }
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

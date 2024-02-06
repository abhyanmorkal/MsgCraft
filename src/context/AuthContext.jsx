// context/AuthContext.js
import { createContext, useContext, useState } from "react";
import usersData from "./user.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (formData) => {
    // Implement your login logic here
    const matchedUser = usersData.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      setUser(matchedUser);
      return true; // Return true if login is successful
    }

    return false; // Return false if login fails
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

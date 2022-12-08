import { createContext, useState } from "react";

// Create context to be used by components
export const UserContext = createContext();

// Create component that will provide a value to our context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

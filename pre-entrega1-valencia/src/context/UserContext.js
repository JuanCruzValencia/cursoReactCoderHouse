import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("userLog", []);

  const setUser = (user) => {
    setStorage();
  };

  const getUser = (username, password) => {};

  const isLogged = () => {
    
  }

  const data = {
    storage,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

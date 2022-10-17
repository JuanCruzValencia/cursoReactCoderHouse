/* import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("userLogged", false);

  const setUser = ({email, password}) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //funcion que modifica el storage a conectado/deconectado
  const isLogged = () => {
    storage ? setStorage(!storage) : setStorage(!storage);
  };

  const data = {
    storage,
    setUser,
    getUser,
    isLogged,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}; */

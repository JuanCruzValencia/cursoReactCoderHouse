import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { setUser } from "../firebase/db";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("userLogged", false);

  //Funcion para registrar a nuevo usuario
  //recibe un nombre, mail y contrasena
  //lo guarda en firestore
  const registerUser = async (data) => {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = res.user;
    setUser({
      ...data,
      uid: user.uid
    });
    console.log(user);
  };

  const getUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
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
    registerUser,
    getUser,
    isLogged,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

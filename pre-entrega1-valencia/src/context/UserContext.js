import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { setUser } from "../firebase/db";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("userLogged", null);

  // Funcion para registrar a nuevo usuario
  // Recibe un nombre, mail y contrasena
  // Lo guarda en firestore
  const registerUser = async (data) => {
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;
      setUser({
        ...data,
        uid: user.uid,
      });
      setStorage(user);
    } catch (error) {
      alert(error);
    }
  };

  // Funcion para ingresar con un usuario ya registrado
  // Toma el ingreso de los imputs
  // Los compara con los datos y devuelve a pagina de inicio con el usuario logueado
  const signIn = async ({ email, password }) => {
    const auth = getAuth();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setStorage(user);
      // enviar a la pagina principal
    } catch (error) {
      alert(error);
    }
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("signed out");
      setStorage(null);
    });
  };

  const data = {
    storage,
    registerUser,
    signIn,
    logOut,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

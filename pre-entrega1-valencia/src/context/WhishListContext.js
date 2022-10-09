import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

export const WhishListContext = createContext({});

export function WhishListContextProvider({ children }) {
  const [whishList, setWishList] = useLocalStorage("whishList", []);

  const addToWhishList = (product) => {
    if (!isInWhishList) {
      whishList.push(product);
      setWishList(whishList);
    } else {
      alert("El producto ya se encuentra en la lista de Deseos");
    }
  };

  const deleteItem = (id) => {
    setWishList(whishList.filter((product) => product.id !== id));
  };

  const isInWhishList = (id) => {
    return whishList.some((product) => product.id === id);
  };

  const data = {
    whishList,
    addToWhishList,
    deleteItem,
  };

  return (
    <WhishListContext.Provider value={data}>
      {children}
    </WhishListContext.Provider>
  );
}

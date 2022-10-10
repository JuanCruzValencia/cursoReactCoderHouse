//import del hook y context
import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
//create and export context
export const CartContext = createContext({});
//export custom function contextProvider
export function CartContextProvider({ children }) {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  const addToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
      cartList.push({
        ...item,
        quantity: quantity,
      });
      setCartList(cartList);
    } else {
      alert("El producto ya se encuentra en el carrito");
    }
  };

  const isInCart = (id) => {
    return cartList.some((product) => product.id === id);
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  const totals = () => {
    return cartList.reduce((acc, act) => {
      return acc + act.price * act.quantity;
    }, 0);
  };

  const cartLength = () => {
    return cartList.length;
  };

  const data = {
    cartList,
    addToCart,
    removeList,
    deleteItem,
    totals,
    cartLength,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

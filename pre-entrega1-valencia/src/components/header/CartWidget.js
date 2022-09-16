//este va a ser el carrito, por ahora solo renderizar un icono de carrito
import { MdOutlineShoppingBag } from "react-icons/md";

function CartWidget() {
  return (
      <a href='#cart'><MdOutlineShoppingBag /></a>
  );
}

export default CartWidget;

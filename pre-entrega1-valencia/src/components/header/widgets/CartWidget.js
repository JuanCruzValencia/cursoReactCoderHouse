import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import './CartWidget.css'

function CartWidget() {
  const { cartLength } = useContext(CartContext);

  return (
    <>
      <MdOutlineShoppingBag />
      <span className="cart__count">{cartLength()}</span>
    </>
  );
}

export default CartWidget;

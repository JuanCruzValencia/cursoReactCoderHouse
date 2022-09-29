import { MdOutlineShoppingBag } from "react-icons/md";
import "./CartWidget.css";

function CartWidget() {
  return (
    <>
      <MdOutlineShoppingBag />
      <span className="cart__count">3</span>
    </>
  );
}

export default CartWidget;

import { MdOutlineShoppingBag } from "react-icons/md";
import './CartWidget.css'

function CartWidget() {
  return (
    <>
      <a href="#cart">
        <MdOutlineShoppingBag />
      </a>
      <span className="cart__count">3</span>
    </>
  );
}

export default CartWidget;

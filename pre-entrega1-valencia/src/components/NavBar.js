import logo from "./logo.svg";
import CartWidget from "./CartWidget";

function NavBar({children}) {
  return (
    <nav className="nav__container">
      <img src={logo} className="nav__img" alt="navbar__logo" />
      <ul className="nav__ul">
        <li className="nav__li">home</li>
        <li className="nav__li">Shop</li>
        <li className="nav__li">About</li>
        <li className="nav__li">Contact</li>
      </ul>
      <ul className="icons__ul">
        <li className="icons__li">search</li>
        <li className="icons__li">wishlist</li>
        <li className="icons__li"><CartWidget/></li>
      </ul>
    </nav>
  );
}

export default NavBar;

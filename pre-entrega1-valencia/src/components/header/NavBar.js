import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import WishWidget from "./widgets/WishWidget";
import SearchBar from "./SearchBar";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./widgets/CartWidget.css";
import { FaRegUser } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function NavBar() {
  const { cartList } = useContext(CartContext);
    
  return (
    <Navbar
      className="d-flex justify-content-between"
      expand="lg"
      id="nabvar__container"
    >
      <Container className="d-flex justify-content-start align-items-center p-2">
        <Navbar.Brand as={Link} to="/" className="ps-4 fs-3">
          Balto
        </Navbar.Brand>
        <Nav className="nav__ul fs-5">
          <NavDropdown title="Shop" className="nav__li">
            <NavDropdown.Item as={Link} to={`/category/men's clothing`}>
              Ropa Hombre
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/jewelery`}>
              Joyeria
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/electronics`}>
              Electronica
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/women's clothing`}>
              Ropa Mujer
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about" className="nav__li">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav__li">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="d-flex justify-content-end align-items-center pe-4">
        <Container className="">
          <SearchBar />
        </Container>
        <Link to="/wishList" className="icons__li p-2 fs-3">
          <WishWidget />
        </Link>
        <Link to="/cart" className="icons__li p-2 fs-3">
          <MdOutlineShoppingBag />
          <span className="cart__count">{cartList.length}</span>
        </Link>
        <Link to="/login" className="icons__li p-2 fs-4">
          <FaRegUser />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;

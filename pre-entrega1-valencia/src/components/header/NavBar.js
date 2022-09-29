import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./widgets/CartWidget";
import WishWidget from "./widgets/WishWidget";
import LoginWidget from "./widgets/LoginWidget";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <Navbar
      className="d-flex justify-content-between"
      expand="lg"
      id="nabvar__container"
    >
      <Container className="d-flex justify-content-start align-items-center p-2">
        <Navbar.Brand as={Link} to='/' className="ps-4 fs-3">
          Balto
        </Navbar.Brand>
        <Nav className="nav__ul fs-5">
          <Nav.Link as={Link} to='/' className="nav__li">
            Shop
          </Nav.Link>
          <Nav.Link as={Link} to='/about' className="nav__li">
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/contact' className="nav__li">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="d-flex justify-content-end align-items-center pe-4">
        <Container className="">
          <SearchBar />
        </Container>
        <Link to='/cart' className="icons__li p-2 fs-3">
          <WishWidget />
        </Link>
        <Link to='/wishList' className="icons__li p-2 fs-3">
          <CartWidget />
        </Link>
        <Link to='/login' className="icons__li p-2 fs-4">
          <LoginWidget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;

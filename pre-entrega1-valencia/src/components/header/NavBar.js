import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import WishWidget from "./WishWidget";
import LoginWidget from './LoginWidget';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <Navbar className="d-flex justify-content-between" expand="lg" id="nabvar__container">
      <Container className="d-flex justify-content-start align-items-center p-2">
        <Navbar.Brand className="ps-4 fs-3" href="#home">
          Balto
        </Navbar.Brand>
        <Nav className="nav__ul fs-5">
          <Nav.Link href="#shop" className="nav__li">
            Shop
          </Nav.Link>
          <Nav.Link href="#about" className="nav__li">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="nav__li">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="d-flex justify-content-end align-items-center pe-4">
        <Container className=""><SearchBar /></Container>
        <span className="icons__li p-2 fs-3">
          <WishWidget />
        </span>
        <span className="icons__li p-2 fs-3">
          <CartWidget />
        </span>
        <span className="icons__li p-2 fs-4">
          <LoginWidget />
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;

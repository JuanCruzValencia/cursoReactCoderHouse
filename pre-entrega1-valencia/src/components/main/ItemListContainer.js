import { Container } from "react-bootstrap";
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <Container className="shop__container">
        <h2 className="shop__title">{greeting}</h2>
        <p className="shop__description">Productos</p>
    </Container>
  );
}

export default ItemListContainer;

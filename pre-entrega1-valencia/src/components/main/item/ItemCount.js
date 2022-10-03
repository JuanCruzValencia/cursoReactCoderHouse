import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(0);

  function handleAddClick() {
    if (counter >= stock) {
      return;
    }
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleSubClick() {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      return;
    }
  }

  return (
    <Container display="flex">
      <Row>
        <Col className="count__container">
          <Button onClick={handleSubClick}>-</Button>
          <span>{counter}</span>
          <Button onClick={handleAddClick}>+</Button>
        </Col>
        <Col>
          <Button className="itemDetail__button" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemCount;

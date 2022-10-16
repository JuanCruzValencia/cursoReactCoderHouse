import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(1);

  function handleAddClick() {
    if (counter >= stock) {
      return;
    }
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleSubClick() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      return;
    }
  }

  return (
    <Container className='count__container'>
      <Stack direction="horizontal" className='counter__container'>
        <Button onClick={handleSubClick} className="itemCount__button">
          -
        </Button>
        <span className="itemDetail__count">{counter}</span>
        <Button onClick={handleAddClick} className="itemCount__button">
          +
        </Button>
      </Stack>
      <Button className="itemDetail__button" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </Container>
  );
}

export default ItemCount;

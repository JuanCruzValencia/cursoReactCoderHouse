import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
  const [counter, setCounter] = useState(0);

function handleAddClick(){
    if(counter >= stock){
      return
    }
    setCounter(prevCounter => prevCounter + 1)
}

function handleSubClick(){
    setCounter(prevCounter => prevCounter - 1)
}

  return (
    <>
      <Container className="count__container">
          <Button onClick={handleSubClick}>-</Button>
          <span>{counter}</span>
          <Button onClick={handleAddClick}>+</Button>
      </Container>
    </>
  );
}

export default ItemCount;

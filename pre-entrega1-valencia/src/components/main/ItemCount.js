import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";

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
      <Container>
        <Stack>
          <Button onClick={handleSubClick}>-</Button>
          <span>{counter}</span>
          <Button onClick={handleAddClick}>+</Button>
        </Stack>
      </Container>
    </>
  );
}

export default ItemCount;

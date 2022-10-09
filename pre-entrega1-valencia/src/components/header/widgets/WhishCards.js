import { Card, Button } from "react-bootstrap";
import { WhishListContext } from "../../../context/WhishListContext";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export function WhishCards({ data }) {
  const { removeItem } = useContext(WhishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Card.Img src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Button onClick={() => removeItem(data.id)}>X</Button>
        <Button onClick={() => addToCart(data, 1)}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

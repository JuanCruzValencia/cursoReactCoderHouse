import { Card, Button } from "react-bootstrap";
import { WishListContext } from "../../../context/WishListContext";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export function WishCards({ data }) {
  const { removeItem } = useContext(WishListContext);
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

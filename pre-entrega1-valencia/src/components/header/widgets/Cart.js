import { Button, Card, Container, Stack } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cartList, removeList, deleteItem } = useContext(CartContext);

  function cartTotal(data) {
    return data.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
  }

  return (
    <Container>
      <h2>Carrito de compras</h2>
      <Container>
        {cartList.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Img src={product.image} />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button onClick={() => deleteItem(product.id)}>X</Button>
            </Card>
          );
        })}
      </Container>
      <Container className="border-top">
        <Stack direction="horizontal">
          <h4>Direccion de envio</h4>
          <b>Precio del envio</b>
        </Stack>
        <Stack direction="horizontal">
          <b>Total con envio</b>
          <b>{cartTotal(cartList)}</b>
        </Stack>
      </Container>
      <Container className="border-top">
        <Button onClick={() => removeList()}>Vaciar Carrito</Button>
        <Button size="lg">Comprar</Button>
      </Container>
    </Container>
  );
}

export default Cart;

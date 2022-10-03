import { Button, Container, Stack } from "react-bootstrap";

function CartWidget() {
  return (
    <Container>
      <h2>Carrito de compras</h2>
      <Container>
        <h3>Cards de los diferentes productos</h3>
      </Container>
      <Container className="border-top">
        <Stack direction="horizontal">
          <h4>Direccion de envio</h4>
          <b>Precio del envio</b>
        </Stack>
        <Stack direction="horizontal">
          <b>Total con envio</b>
          <b>$24.234,00</b>
        </Stack>
      </Container>
      <Container className="border-top">
        <Button size="lg">Comprar</Button>
      </Container>
    </Container>
  );
}

export default CartWidget;

import { Button, Card, Container, Form } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";

export const Checkout = () => {
  const { cartList, totals } = useContext(CartContext);
  const { form, handleChange, handleSubmit } = useForm({
    fullName: "",
    phoneNumber: "",
    email: "",
    emailValidate: "",
  });

  return (
    <Container>
      <Container className="checkout__cart">
        <h2>Mi Carrito</h2>
        {cartList.map((product) => {
          return (
            <Card key={product.id} className="checkout__card">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="checkout__card--text">
                ${product.price.toFixed(2)} X {product.quantity}
              </Card.Text>
            </Card>
          );
        })}
        <h4>Total de la Compra: {totals().toFixed(2)}</h4>
      </Container>
      <Container className="checkout__order">
        <h2>Mis Datos</h2>
        <Form onSubmit={(e) => handleSubmit(e, form)}>
          <Form.Group>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              className="checkout__input"
              name="fullName"
              onChange={handleChange}
            />
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              className="checkout__input"
              name="phoneNumber"
              onChange={handleChange}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className="checkout__input"
              name="email"
              onChange={handleChange}
            />
            <Form.Label>Reingrese Email</Form.Label>
            <Form.Control
              type="email"
              className="checkout__input"
              name="emailValidate"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Generar Orden</Button>
          {/* boton dentro de un condicional */}
        </Form>
      </Container>
    </Container>
  );
};
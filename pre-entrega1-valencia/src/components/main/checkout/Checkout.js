import { Button, Card, Container, Form } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";
import { setOrder } from "../../../firebase/db";
import "./Checkout.css";

export const Checkout = () => {
  const { cartList, totals, removeList } = useContext(CartContext);
  const { form, handleChange } = useForm({
    fullName: "",
    phoneNumber: "",
    email: "",
    emailValidate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setOrder(form, cartList, totals);
    removeList();
  };

  return (
    <Container className='checkout__container'>
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
        <Form onSubmit={(e) => handleSubmit(e, form)} className='checkout__form'>
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
              type="text"
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
          <Button type="submit" className='checkout__btn'>Generar Orden</Button>
          {/* boton dentro de un condicional */}
        </Form>
      </Container>
    </Container>
  );
};

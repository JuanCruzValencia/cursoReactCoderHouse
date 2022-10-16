import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <Container className="register__container">
      <h2>Registrarse</h2>
      <Form className="register__form">
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="register__input"
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="register__input"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Contrasena</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="register__input"
            />
            <Form.Label>Vuelva a introducir la Contrasena</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="register__input"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3" as={Col}>
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              className="register__input"
            />
          </Form.Group>

          <Form.Group className="mb-3" as={Col} controlId="formGridAddress1">
            <Form.Label>Cuidad</Form.Label>
            <Form.Control className="register__input" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Deseo recibir notificaciones" />
        </Form.Group>

        <Button type="submit" className="register__btn">
          Registrarse
        </Button>
      </Form>
      <Link to={"/login"}>
        <h4>Ya tenes una cuenta?</h4>
      </Link>
    </Container>
  );
}

export default Register;

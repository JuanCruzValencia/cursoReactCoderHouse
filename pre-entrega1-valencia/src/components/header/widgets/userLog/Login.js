import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Container className="login__container">
      <h2>Login</h2>
      <Form className="login__form">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" className="login__input" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control type="password" className="login__input" />
        </Form.Group>
        <Form.Group>
          <Button type="submit" className="login__btn">
            Ingresar
          </Button>
        </Form.Group>
      </Form>
      <Link to={"/register"}>
        <h4>No tenes cuenta?</h4>
      </Link>
    </Container>
  );
}

export default Login;

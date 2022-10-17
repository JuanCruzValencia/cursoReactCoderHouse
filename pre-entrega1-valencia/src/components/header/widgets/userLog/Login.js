import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const USER = {
    userName,
    password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    USER.userName = userName;
    USER.password = password;
    console.log(JSON.stringify(USER));
    //Form submission happens here
  };

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  return (
    <Container className="login__container">
      <h2>Login</h2>
      <Form className="login__form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            className="login__input"
            onChange={(e) => handleChange(setUserName, e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control
            type="password"
            className="login__input"
            onChange={(e) => handleChange(setPassword, e)}
          />
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

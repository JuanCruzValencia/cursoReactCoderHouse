import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import { Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { UserDetail } from "../../../main/user/UserDetail";

function Login() {
  const { userState, signIn } = useContext(UserContext);
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(form);
  };

  return (
    <>
      {userState ? (
        <UserDetail />
      ) : (
        <Container className="login__container">
          <h2>Login</h2>
          <Form className="login__form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                className="login__input"
                onChange={handleChange}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contrasena</Form.Label>
              <Form.Control
                type="password"
                className="login__input"
                onChange={handleChange}
                name="password"
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
      )}
    </>
  );
}

export default Login;

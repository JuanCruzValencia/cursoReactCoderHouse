import { Form, Button, Container } from "react-bootstrap";

function LoginWidget() {
  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Log</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginWidget;

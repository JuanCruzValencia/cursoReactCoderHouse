import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { getAllOrders } from "../../../firebase/db";
import { Card, Button, Table, Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserDetail.css";

export const UserDetail = () => {
  const { userState, logOut } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <Container className="userDetail__container">
      <Card className="userDetail__card">
        <Card.Header as="h2">
          Bienvenido <b>{userState.email}</b>
        </Card.Header>
        <Card.Body>
          <Card.Title as="h4">Mis Compras</Card.Title>
          <CardGroup className="userDetail__cardGroup">
            {orders.length > 0 ? (
              orders.map((order) => {
                return (
                  <Table striped bordered hover key={order.id}>
                    <thead>
                      <tr>
                        <th>ID de Compra: {order.id}</th>
                        <th>Nombre: {order.buyer.name}</th>
                        <th>Email: {order.buyer.email}</th>
                        <th>Telefono: {order.buyer.phone}</th>
                        <th>Fecha: {order.date.toDate().toDateString()}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((product) => {
                        return (
                          <tr key={product.id}>
                            <td>ID de Producto: {product.id}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>x {product.quantity}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                );
              })
            ) : (
              <h4>No realizo ninguna compra</h4>
            )}
          </CardGroup>
          <Link to={"/"}>
            <Button onClick={() => logOut()} className="userDetail__btn">
              Desconectarse
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

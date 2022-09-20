import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import './Card.css'

function CardProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const resolve = await fetch("https://fakestoreapi.com/products");
      const products = await resolve.json();
      setData(products);
    }
    getData();
  }, []);

  return data.map((product) => {
    return (
        <Card
          style={{ width: "18rem" }}
          key={product.id}
          className="card"
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Ver</Button>
          </Card.Body>
        </Card>
    );
  });
}

export default CardProduct;

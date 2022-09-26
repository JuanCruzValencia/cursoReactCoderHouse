import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }} key={product.id} className="card">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ItemCount stock={10} initial={1} />
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;

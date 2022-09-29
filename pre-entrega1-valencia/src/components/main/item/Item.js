import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
 

  return (
    <Card className="item__card">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="itemCard__body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/item/${product.id}`}><Button className="itemCard__btn">Ver</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [quantityToBuy, setQuantityToBuy] = useState(0);

  function onAdd(quantityTuAdd) {
    setQuantityToBuy(quantityTuAdd);
  }
  console.log(quantityToBuy);
  return (
    <Card className="itemDetail__card">
      <Card.Header>{product.category}</Card.Header>
      <Card.Body className="itemDetail__body">
        <Card.Img src={product.image} />
        <Container className="flex-column">
          <Container>
            <Card.Title className="text--uppercase">{product.title}</Card.Title>
            <Card.Text className="text--large">{product.description}</Card.Text>
          </Container>
          <Container className="flex-row">
            <ItemCount
              stock={5}
              initial={1}
              onAdd={(number) => onAdd(number)}
            />
          </Container>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted">En stock</Card.Footer>
    </Card>
  );
}

export default ItemDetail;

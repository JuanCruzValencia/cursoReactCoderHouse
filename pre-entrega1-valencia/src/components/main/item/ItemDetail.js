import { useState, useContext } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";
import { WishListContext } from "../../../context/WishListContext";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

function ItemDetail({ product }) {
  const { wishList, addToWishList, deleteItem } = useContext(WishListContext);
  const [fav, setFav] = useState(false);
  const [quantityToBuy, setQuantityToBuy] = useState(0);
  const { addToCart } = useContext(CartContext);

  function onAdd(quantityToAdd) {
    setQuantityToBuy(quantityToAdd);
  }

  const handleAdd = (number) => {
    onAdd(number)
    addToCart(product, number)
  }

  return (
    <Card className="itemDetail__card">
      <Card.Header>{product.category}</Card.Header>
      <Card.Body className="itemDetail__body">
        <Card.Img src={product.image} />
        <Container className="flex-column">
          {wishList.some((item) => item.id === product.id) ? (
            <AiTwotoneHeart
              className="heart__filled"
              onClick={() => {
                deleteItem(product.id);
                setFav(!fav);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="heart__icon-item"
              onClick={() => {
                addToWishList(product);
                setFav(!fav);
              }}
            />
          )}
          <Container>
            <Card.Title className="text--uppercase">{product.title}</Card.Title>
            <Card.Text className="text--large">{product.description}</Card.Text>
          </Container>
          <Container className="flex-row">
            {quantityToBuy > 0 ? (
              <Link to="/cart">
                <Button className="itemCart__button">
                  Continuar al Carrito
                </Button>
              </Link>
            ) : (
              <ItemCount
                stock={5}
                initial={1}
                onAdd={handleAdd}
              />
            )}
          </Container>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted">En stock</Card.Footer>
    </Card>
  );
}

export default ItemDetail;

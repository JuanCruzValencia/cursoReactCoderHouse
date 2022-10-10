import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { WishListContext } from "../../../context/WishListContext";

function Item({ product }) {
  const { wishList, addToWishList, deleteItem } = useContext(WishListContext);
  const [fav, setFav] = useState(false);

  return (
    <Card className="item__card">
      {wishList.some((item) => item.id === product.id) ? (
        <AiTwotoneHeart
          className="heart__filled"
          onClick={() => {
            deleteItem(product.id)
            setFav(!fav)
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
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="itemCard__body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button className="itemCard__btn">Ver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

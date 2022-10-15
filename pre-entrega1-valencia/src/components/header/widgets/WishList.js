import { WishListContext } from "../../../context/WishListContext";
import { Modal, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { WishCards } from "./WishCards";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import './WishList.css'

export function WishList() {
  const [show, setShow] = useState(false);
  const { wishList } = useContext(WishListContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {wishList.length > 0 ? <AiTwotoneHeart onClick={handleShow} className="heart__icon--red" /> :<AiOutlineHeart onClick={handleShow} className="heart__icon" />}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Productos Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {wishList.length > 0 ? (
            wishList.map((product) => {
              return <WishCards key={product.id} data={product} />;
            })
          ) : (
            <h3>No tiene ningun producto en Favoritos</h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

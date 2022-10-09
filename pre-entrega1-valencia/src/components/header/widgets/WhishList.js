import { WhishListContext } from "../../../context/WhishListContext";
import { Modal, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { WhishCards } from "./WhishCards";
import { AiOutlineHeart } from "react-icons/ai";
import './WhishList.css'

export function WhishList() {
  const [show, setShow] = useState(false);
  const { whishList } = useContext(WhishListContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <AiOutlineHeart onClick={handleShow} className="heart__icon" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Productos Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {whishList.length > 0 ? (
            whishList.map((product) => {
              return <WhishCards key={product.id} data={product} />;
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

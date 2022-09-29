import ItemDetail from "./item/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DB from "./api/DB";
import { Container } from "react-bootstrap";
import './ItemDetailContainer.css'

function getItem() {
  const getSelectedProduct = new Promise((res, rej) => {
    setTimeout(() => {
      res(DB);
      rej(Error);
    }, 2000);
  });
  return getSelectedProduct;
}

function ItemDetailContainer() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItem().then((res) => {
      setSelectedProduct(res.find((prod) => prod.id === Number(id)));
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Container className="itemDetail__container">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ItemDetail product={selectedProduct} />
      )}
    </Container>
  );
}

export default ItemDetailContainer;

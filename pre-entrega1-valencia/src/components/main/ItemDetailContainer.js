import ItemDetail from "./ItemDetail";
import { useState } from "react";
import DB from "./DB";

function getItem() {
  const getSelectedProduct = new Promise((res, rej) => {
    setTimeout(() => {
      res(DB);
      rej(Error);
    }, 2000);
  });
  return getSelectedProduct;
}

function ItemDetailContainer({ id }) {
  const [selectedProduct, setSelectedProduct] = useState();

  getItem().then((res) => {
    let product = res.find((prod) => prod.id === id);
    setSelectedProduct(product);
  });

  return (
    <>
      <ItemDetail product={selectedProduct} />
    </>
  );
}

export default ItemDetailContainer;

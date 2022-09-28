import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import DB from "./DB";
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(DB);
        rej(Error);
      }, 2000);
    });

    getAllProducts.then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container className="shop__container">
      <h2 className="shop__title">{greeting}</h2>
      <Container id="cards__container">
        {isLoading ? <span>Loading...</span> : <ItemList data={data} />}
        <ItemDetailContainer id={1} />
      </Container>
    </Container>
  );
}

export default ItemListContainer;

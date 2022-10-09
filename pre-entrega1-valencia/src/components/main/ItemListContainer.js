import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import DB from "./api/DB";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getAllProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(DB);
        rej(Error);
      }, 2000);
    });
    if (categoryId) {
      getAllProducts.then((res) => {
        setData(res.filter((product) => product.category === categoryId));
        setIsLoading(false);
      });
    } else {
      getAllProducts.then((res) => {
        setData(res);
        setIsLoading(false);
      });
    }
  }, [categoryId]);

  return (
    <Container className="shop__container">
      <h2 className="shop__title">{greeting}</h2>
      <div id="cards__container">
        {isLoading ? <span>Loading...</span> : <ItemList data={data} />}
      </div>
    </Container>
  );
}

export default ItemListContainer;

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../../firebase/db";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  //Traigo la informacion de firebase
  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((snapshop) => {
        if (snapshop.size === 0) {
          console.log("No results");
        }
        setData(snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
      setIsLoading(false);
    } else {
      getAllProducts().then((snapshop) => {
        if (snapshop.size === 0) {
          console.log("No results");
        }
        setData(snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
      setIsLoading(false);
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

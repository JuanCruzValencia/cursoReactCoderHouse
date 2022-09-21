//import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

function ItemListContainer({ greeting, data }) {
  return (
    <Container className="shop__container">
      <h2 className="shop__title">{greeting}</h2>
      <Container id="cards__container">
      <ItemList data={data}/>
      </Container>
    </Container>
  );
}

export default ItemListContainer;

//import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./ItemListContainer.css";
import CardProduct from "./Card";

function ItemListContainer({ greeting }) {
  return (
    <Container className="shop__container">
      <h2 className="shop__title">{greeting}</h2>
      <Container id="cards__container">
        <CardProduct />
      </Container>
      {/* <p className="shop__description">Productos</p> */}
    </Container>
  );
}

export default ItemListContainer;

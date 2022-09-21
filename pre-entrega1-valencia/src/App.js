import "./App.css";
import { useState, useEffect } from "react";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/header/NavBar";
import Hero from './components/main/Hero';
import Footer from './components/footer/Footer'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const resolve = await fetch("https://fakestoreapi.com/products");
      const products = await resolve.json();
      setData(products);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ItemListContainer greeting="Bienvenido a balto shop" data={data}/>
      <Footer />
    </div>
  );
}

export default App;

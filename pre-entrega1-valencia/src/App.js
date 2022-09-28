import "./App.css";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/header/NavBar";
import Hero from "./components/main/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ItemListContainer greeting="Bienvenido a balto shop" />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/header/NavBar";
import Hero from "./components/main/Hero";
import Footer from "./components/footer/Footer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import "./App.css";
import CartWidget from "./components/header/widgets/CartWidget";
import WishWidget from "./components/header/widgets/WishWidget";
import LoginWidget from "./components/header/widgets/LoginWidget";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a balto shop" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Bienvenido a balto shop" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/wishList" element={<WishWidget />} />
          <Route path="/login" element={<LoginWidget />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

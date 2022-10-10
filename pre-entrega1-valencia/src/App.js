import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/header/NavBar";
import Hero from "./components/main/Hero";
import Footer from "./components/footer/Footer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import "./App.css";
import LoginWidget from "./components/header/widgets/userLog/LoginWidget";
import RegisterWidget from "./components/header/widgets/userLog/RegisterWidget";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/header/widgets/Cart";
import { WishListContextProvider } from "./context/WishListContext";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <WishListContextProvider>
          <div className="App">
            <NavBar />
            <Hero />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="Bienvenido a balto shop" />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer greeting="Bienvenido a balto shop" />
                }
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginWidget />} />
              <Route path="/register" element={<RegisterWidget />} />
            </Routes>
            <Footer />
          </div>
        </WishListContextProvider>
      </CartContextProvider>
    </Router>
  );
}

export default App;

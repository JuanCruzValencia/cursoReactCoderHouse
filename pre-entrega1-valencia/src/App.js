import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import NavBar from "./components/header/NavBar";
import Hero from "./components/main/Hero";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Cart from "./components/header/widgets/Cart";
import Register from "./components/header/widgets/userLog/Register";
import Login from "./components/header/widgets/userLog/Login";
import Footer from "./components/footer/Footer";
import "./App.css";

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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </WishListContextProvider>
      </CartContextProvider>
    </Router>
  );
}

export default App;

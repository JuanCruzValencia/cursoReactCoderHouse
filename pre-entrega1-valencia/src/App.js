import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import { UserContextProvider } from "./context/UserContext";
import NavBar from "./components/header/NavBar";
import Hero from "./components/main/Hero";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Cart from "./components/header/widgets/Cart";
import Register from "./components/header/widgets/userLog/Register";
import Login from "./components/header/widgets/userLog/Login";
import { Checkout } from "./components/main/checkout/Checkout";
import Footer from "./components/footer/Footer";
import { useEffect, useRef } from "react";
import { getProductsFromApi } from "./firebase/api/fetch";
import "./App.css";
import { firebaseConfig } from "./firebase/fireStore";
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig);


function App() {
  const fetchStatus = useRef(false);

  useEffect(() => {
    if (fetchStatus.current === false) {
      getProductsFromApi();
    }
    return () => {
      fetchStatus.current = true;
    };
  }, []);

  return (
    <Router>
      <UserContextProvider>
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
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </div>
          </WishListContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;

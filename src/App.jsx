// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";

// Pages
import HomePage from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";

// Product Details
import ProductDetail from "./components/ProductDetail";
import SpeakerDetail from "./components/SpeakerDetail";
import EarphoneDetail from "./components/EarphoneDetail";

// Data service
import { getProductsByCategory, saveOrder } from "./services/dataService";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false); // Closes the CartModal
    setIsCheckoutOpen(true); // Opens the CheckoutModal
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  const handleCheckoutComplete = async (orderData) => {
    try {
      const order = await saveOrder(orderData);
      console.log("Order saved:", order);
      setCartItems([]);
      // setIsCheckoutOpen(false);
      // alert("Order placed successfully!");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Error placing order. Please try again.");
    }
  };

  useEffect(() => {
    if (isCartOpen || isCheckoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, isCheckoutOpen]);

  return (
    <Router>
      <div className="App relative min-h-screen bg-white">
        <Navbar cartItems={cartItems} onCartClick={handleCartClick} />

        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={handleCartClick}
            onCheckoutClick={handleCheckoutClick}
          />
        )}

        {isCheckoutOpen && (
          <CheckoutModal
            cartItems={cartItems}
            onClose={handleCheckoutClose}
            onCheckoutComplete={handleCheckoutComplete}
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/headphones"
            element={
              <HeadphonesPage products={getProductsByCategory("headphones")} />
            }
          />
          <Route
            path="/headphones/:id"
            element={
              <ProductDetail
                products={getProductsByCategory("headphones")}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartClick={handleCartClick}
              />
            }
          />
          <Route
            path="/speakers"
            element={
              <SpeakersPage products={getProductsByCategory("speakers")} />
            }
          />
          <Route
            path="/speakers/:id"
            element={
              <SpeakerDetail
                products={getProductsByCategory("speakers")}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartClick={handleCartClick}
              />
            }
          />
          <Route
            path="/earphones"
            element={
              <EarphonesPage products={getProductsByCategory("earphones")} />
            }
          />
          <Route
            path="/earphones/:id"
            element={
              <EarphoneDetail
                products={getProductsByCategory("earphones")}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartClick={handleCartClick}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

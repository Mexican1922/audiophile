// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";

//  Main Product Pages
import HomePage from "./pages/HomePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";

//  Product Detail Pages
import ProductDetail from "./components/ProductDetail";
import SpeakerDetail from "./components/SpeakerDetail";
import EarphoneDetail from "./components/EarphoneDetail";

//  Data Source
import { ALL_PRODUCTS } from "./data/allProducts";

function App() {
  // --- CART STATE ---
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  //  Toggle Cart Modal
  const handleCartClick = () => {
    console.log("Cart clicked, current state:", isCartOpen); // Debug log
    setIsCartOpen((prev) => !prev);
  };

  //  Toggle Checkout Modal
  const handleCheckoutClick = () => {
    console.log("Checkout clicked"); // Debug log
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  //  Close Checkout Modal
  const handleCheckoutClose = () => {
    console.log("Checkout close clicked"); // Debug log
    setIsCheckoutOpen(false);
  };

  //  Handle Checkout Complete
  const handleCheckoutComplete = () => {
    console.log("Checkout complete"); // Debug log
    setCartItems([]);
    // Note: We don't close the checkout modal here because the OrderConfirmation will handle that
  };

  //  Disable background scroll when modal is open
  useEffect(() => {
    if (isCartOpen || isCheckoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, isCheckoutOpen]);

  //  Filter products by category
  const getProductsByCategory = (category) =>
    ALL_PRODUCTS.filter((p) => p.category === category);

  return (
    <Router>
      <div className="App relative min-h-screen bg-white">
        {/* Navbar appears on all pages */}
        <Navbar cartItems={cartItems} onCartClick={handleCartClick} />

        {/*  Cart Modal */}
        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={handleCartClick}
            onCheckoutClick={handleCheckoutClick}
          />
        )}

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <CheckoutModal
            cartItems={cartItems}
            onClose={handleCheckoutClose}
            onCheckoutComplete={handleCheckoutComplete}
          />
        )}

        {/* 📦 Page Routes */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Headphones */}
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
                products={ALL_PRODUCTS}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartClick={handleCartClick}
              />
            }
          />

          {/* Speakers */}
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
                products={ALL_PRODUCTS}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartClick={handleCartClick}
              />
            }
          />

          {/* Earphones */}
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
                products={ALL_PRODUCTS}
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

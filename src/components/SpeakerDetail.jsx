// src/components/SpeakerDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryCard from "./CategoryCard";
import About from "./About";
import Footer from "./Footer";

const SpeakerDetail = ({ products, cartItems, setCartItems, onCartClick }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // 🧩 Find current product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link
          to="/speakers"
          className="text-orange-400 hover:text-orange-300 font-semibold"
        >
          Go back to Speakers
        </Link>
      </div>
    );
  }

  const details = product.details;

  // 🧠 Related products logic
  const currentProductId = parseInt(id);
  const allOtherProducts = products.filter((p) => p.id !== currentProductId);

  const sameCategoryProducts = allOtherProducts.filter(
    (p) => p.category === product.category
  );
  const otherCategoryProducts = allOtherProducts.filter(
    (p) => p.category !== product.category
  );

  const relatedSameCategory = sameCategoryProducts.slice(0, 1);
  const relatedOtherCategory = otherCategoryProducts.slice(0, 2);

  const relatedProducts = [
    ...relatedSameCategory,
    ...relatedOtherCategory,
  ].slice(0, 3);

  // 🛒 Add to cart logic
  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images.desktop,
    };

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }

    alert(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cartItems={cartItems} onCartClick={onCartClick} />

      <main className="pt-[90px]">
        {/* 🧭 Breadcrumb / Go Back */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() =>
                window.history.length > 1
                  ? navigate(-1)
                  : navigate(`/${product.category}`)
              }
              className="text-gray-500 hover:text-black transition-colors"
            >
              ← Go Back
            </button>
          </div>
        </section>

        {/* 🏷️ Product Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images.desktop}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Info */}
              <div>
                {product.isNew && (
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-400 bg-orange-50 rounded-full mb-4">
                    NEW PRODUCT
                  </span>
                )}
                <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <p className="text-2xl font-bold mb-6">
                  {product.formattedPrice}
                </p>

                <div className="flex items-center mb-8">
                  <div className="flex items-center border border-gray-300 rounded mr-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="px-8 py-3 bg-orange-400 text-white font-semibold rounded hover:bg-orange-300 transition-colors"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🧾 Features + In The Box */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Features */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">
                  FEATURES
                </h2>
                <div className="space-y-4">
                  {details.features.map((feature, index) => (
                    <p key={index} className="text-gray-600">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* In The Box */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">
                  IN THE BOX
                </h2>
                <div className="space-y-3">
                  {details.inTheBox.map((item, index) => (
                    <div key={index} className="flex">
                      <span className="text-orange-400 font-bold mr-3">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-600">{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🖼️ Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="row-span-2">
                <img
                  src={details.gallery[0]}
                  alt={`${product.name} Gallery 1`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={details.gallery[1]}
                  alt={`${product.name} Gallery 2`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={details.gallery[2]}
                  alt={`${product.name} Gallery 3`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ❤️ You May Also Like */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-center mb-12">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="text-center">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
                    <img
                      src={relatedProduct.images.desktop}
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                    {relatedProduct.name}
                  </h3>
                  <Link
                    to={`/${relatedProduct.category}/${relatedProduct.id}`}
                    className="px-8 py-3 bg-orange-400 text-white font-semibold rounded hover:bg-orange-300 transition-colors inline-block"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🧩 Reusable Components */}
        <CategoryCard />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SpeakerDetail;

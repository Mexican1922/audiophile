// ProductDetail.jsx (Used for Headphone/Generic Detail pages)
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryCard from "./CategoryCard";
import About from "./About";
import Footer from "./Footer";

const ProductDetail = ({ products, cartItems, setCartItems, onCartClick }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Add safety checks for product details
  const details = product.details || {
    features: [],
    inTheBox: [],
    gallery: [],
  };

  const currentProductId = parseInt(id);

  // --- 🎯 NEW LOGIC FOR 'YOU MAY ALSO LIKE' MIX ---
  const allOtherProducts = products.filter((p) => p.id !== currentProductId);

  // Define categories to pull from, prioritizing the current one (e.g., headphones)
  const relatedCategories = ["headphones", "speakers", "earphones"];
  const relatedProducts = [];

  for (const category of relatedCategories) {
    if (relatedProducts.length >= 3) break;

    const availableProducts = allOtherProducts.filter(
      (p) =>
        p.category === category && !relatedProducts.some((rp) => rp.id === p.id)
    );

    // Try to include at least one product from each relevant category
    if (availableProducts.length > 0) {
      relatedProducts.push(availableProducts[0]);
    }
  }

  // Ensure we have exactly 3, padding with any remaining products if needed
  while (
    relatedProducts.length < 3 &&
    allOtherProducts.length > relatedProducts.length
  ) {
    const productToAdd = allOtherProducts.find(
      (p) => !relatedProducts.some((rp) => rp.id === p.id)
    );
    if (productToAdd) {
      relatedProducts.push(productToAdd);
    } else {
      break;
    }
  }
  // ---------------------------------------------------

  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images.desktop,
    };
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, newItem]);
    }

    alert(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <>
      <Navbar cartItems={cartItems} onCartClick={onCartClick} />

      <div className="pt-[90px]">
        {/* Breadcrumb */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-500 hover:text-black transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Go Back
            </button>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Image (Main Image) */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images.desktop}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Product Info */}
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
                  {/* Quantity Selector */}
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
                  {/* End Quantity Selector */}

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

        {/* Features and In The Box */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Features */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">
                  FEATURES
                </h2>
                <div className="space-y-4">
                  {details.features && details.features.length > 0 ? (
                    details.features.map((feature, index) => (
                      <p key={index} className="text-gray-600">
                        {feature}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600">No features available.</p>
                  )}
                </div>
              </div>

              {/* In The Box */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">
                  IN THE BOX
                </h2>
                <div className="space-y-3">
                  {details.inTheBox && details.inTheBox.length > 0 ? (
                    details.inTheBox.map((item, index) => (
                      <div key={index} className="flex">
                        <span className="text-orange-400 font-bold mr-3">
                          {item.quantity}x
                        </span>
                        <span className="text-gray-600">{item.item}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">
                      No items in box information available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {details.gallery && details.gallery.length >= 3 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid grid-rows-2 gap-4 md:col-span-1">
                  <img
                    src={details.gallery[0]}
                    alt={`${product.name} gallery image 1`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src={details.gallery[1]}
                    alt={`${product.name} gallery image 2`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <img
                    src={details.gallery[2]}
                    alt={`${product.name} gallery image 3`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                No gallery images available.
              </div>
            )}
          </div>
        </section>

        {/* You May Also Like Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-center mb-12">
              YOU MAY ALSO LIKE
            </h2>
            {relatedProducts.length > 0 ? (
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
            ) : (
              <div className="text-center text-gray-500">
                No related products available.
              </div>
            )}
          </div>
        </section>
        {/* End You May Also Like Section */}

        {/* Utility Components */}
        <CategoryCard />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

// HeadphonesPage.jsx (Updated to use props)
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import About from "../components/About";
import Footer from "../components/Footer";

// 🎯 FIX: Accept the 'products' prop passed from App.jsx
// It is good practice to also ensure a default empty array is used.
const HeadphonesPage = ({ products = [] }) => {
  // 🛑 REMOVED: The hardcoded product data array is no longer needed here.

  // Define the category slug for ProductCard linking (e.g., /headphones/xx99-mark-two)
  const categorySlug = "headphones";

  return (
    <>
      <Navbar />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
              Headphones
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 🎯 Check if products array has items before mapping */}
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isReversed={index % 2 !== 0}
                  // 🎯 FIX: Pass the categorySlug so ProductCard knows where to link to.
                  category={categorySlug}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No headphones available at the moment.
                </p>
                <p className="text-gray-400 mt-2">Please check back later.</p>
              </div>
            )}
          </div>
        </section>

        <CategoryCard />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default HeadphonesPage;

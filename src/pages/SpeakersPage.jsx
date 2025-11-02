// src/pages/SpeakersPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CategorySection from "../components/CategoryCard";
import About from "../components/About";
import Footer from "../components/Footer";

// 🎯 Component now accepts 'products' as a prop from App.jsx
const SpeakersPage = ({ products = [] }) => {
  // Handle case where products might be loading or empty
  if (!products || products.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-[90px]">
          <section className="bg-black text-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
                SPEAKERS
              </h1>
            </div>
          </section>
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No speakers available at the moment.
            </p>
            <p className="text-gray-400 mt-2">Please check back later.</p>
          </div>
          <CategorySection />
          <About />
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
              SPEAKERS
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Map over the products passed via props */}
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isReversed={index % 2 !== 0}
                // The ProductCard now uses product.category for correct linking
              />
            ))}
          </div>
        </section>

        {/* 🎯 Using the corrected component name */}
        <CategorySection />

        <About />
        <Footer />
      </div>
    </>
  );
};

export default SpeakersPage;

// src/pages/EarphonesPage.jsx (Updated to use props)
import React from "react";
// 🎯 Import Navbar (necessary for a full page layout, though missing in source)
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import About from "../components/About";
import Footer from "../components/Footer";

// 🎯 FIX 1: Component must accept 'products' as a prop from App.jsx.
const EarphonesPage = ({ products = [] }) => {
  // 🛑 REMOVED: The hardcoded 'products' array from the source code.

  // Define the category slug for ProductCard linking (e.g., /earphones/yx1)
  const categorySlug = "earphones";

  return (
    <>
      {/* 🎯 Added Navbar to maintain full page structure */}
      <Navbar />
      <div className="pt-[90px]">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
              Earphones
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 🎯 FIX 2: Map over the products array passed via props */}
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isReversed={index % 2 !== 0}
                // 🎯 Pass the correct category slug for linking in ProductCard
                category={categorySlug}
              />
            ))}
          </div>
        </section>

        <CategoryCard />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default EarphonesPage;

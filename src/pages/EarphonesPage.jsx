// src/pages/EarphonesPage.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import About from "../components/About";
import Footer from "../components/Footer";
import { getProductsByCategory } from "../services/dataService";

const EarphonesPage = () => {
  const products = getProductsByCategory("earphones");
  const categorySlug = "earphones";

  return (
    <>
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
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isReversed={index % 2 !== 0}
                  category={categorySlug}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No earphones available at the moment.
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

export default EarphonesPage;

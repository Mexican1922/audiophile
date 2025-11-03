// src/pages/HeadphonesPage.jsx
import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import About from "../components/About";
import Footer from "../components/Footer";

const HeadphonesPage = () => {
  const { data: products, isLoading } = useQuery(
    api.products.getProductsByCategory,
    { category: "headphones" }
  );

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="pt-[90px] flex justify-center items-center min-h-[50vh]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </>
    );
  }

  if (!products || products.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-[90px]">
          <section className="bg-black text-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
                Headphones
              </h1>
            </div>
          </section>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No headphones available at the moment.
            </p>
            <p className="text-gray-400 mt-2">Please check back later.</p>
          </div>
          <CategoryCard />
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
              Headphones
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products.map((product, index) => (
              <ProductCard
                key={product._id}
                product={product}
                isReversed={index % 2 !== 0}
                category="headphones"
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

export default HeadphonesPage;

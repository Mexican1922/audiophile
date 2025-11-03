import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategoryCard";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <CategorySection />
        <FeaturedProducts />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;

// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isReversed }) => {
  // Add a safety check for the product object
  if (!product) {
    return null;
  }

  // Add safety checks for product properties
  const { name, description, isNew, category, id, images } = product;

  // Default values for images if they're missing
  const imageSources = images || {
    desktop: "",
    tablet: "",
    mobile: "",
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${
        isReversed ? "md:grid-flow-col-dense" : ""
      }`}
    >
      {/* Product Image */}
      <div className={`${isReversed ? "md:col-start-2" : ""}`}>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          {/* IMPLEMENT RESPONSIVE IMAGE LOADING using <picture> */}
          <picture>
            <source media="(min-width: 1024px)" srcSet={imageSources.desktop} />
            <source media="(min-width: 768px)" srcSet={imageSources.tablet} />
            {/* Mobile image is the default fallback */}
            <img
              src={imageSources.mobile}
              alt={name || "Product image"}
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </div>

      {/* Product Info */}
      <div className={`${isReversed ? "md:col-start-1" : ""}`}>
        {isNew && (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-400 bg-orange-50 rounded-full mb-4">
            NEW PRODUCT
          </span>
        )}
        <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-4">
          {name}
        </h2>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Use product.category for the URL path */}
        {/* Assumes product.category is 'headphones', 'speakers', or 'earphones' */}
        <Link
          to={`/${category}/${id}`}
          className="inline-block px-8 py-3 bg-orange-400 text-white font-semibold rounded hover:bg-orange-300 transition-colors"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

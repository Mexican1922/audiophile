import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 🎯 Import useNavigate

// Import images from src/assets
import headphonesDesktop from "../assets/Images/categories/desktop/image-xx99-mark-one-headphones.jpg";
import headphonesTablet from "../assets/Images/categories/desktop/image-xx99-mark-one-headphones.jpg";
import headphonesMobile from "../assets/Images/categories/desktop/image-xx99-mark-one-headphones.jpg";

import speakersDesktop from "../assets/Images/categories/tablet/image-zx9-speaker.jpg";
import speakersTablet from "../assets/Images/categories/tablet/image-zx9-speaker.jpg";
import speakersMobile from "../assets/Images/categories/tablet/image-zx9-speaker.jpg";

import earphonesDesktop from "../assets/Images/categories/mobile/image-yx1-earphones.jpg";
import earphonesTablet from "../assets/Images/categories/mobile/image-yx1-earphones.jpg";
import earphonesMobile from "../assets/Images/categories/mobile/image-yx1-earphones.jpg";

// Category Card Component (Internal use)
const CategoryCard = ({ title, images, slug }) => {
  const [imageError, setImageError] = React.useState(false);
  const navigate = useNavigate(); // 🎯 Initialize navigation hook

  const handleShopClick = () => {
    // Navigate to the corresponding category page (e.g., /headphones, /speakers)
    navigate(`/${slug}`);
  };

  return (
    <div
      className="bg-gray-100 rounded-lg pt-20 sm:pt-24 pb-6 sm:pb-8 px-6 sm:px-6 text-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer relative overflow-visible"
      onClick={handleShopClick} // 🎯 Make the entire card clickable
    >
      {/* Product Image - Responsive positioning */}
      <div className="absolute -top-12 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
        {!imageError ? (
          <picture className="flex justify-center">
            {/* 🎯 Use the imported images object */}
            <source media="(min-width: 1024px)" srcSet={images.desktop} />
            <source media="(min-width: 768px)" srcSet={images.tablet} />
            <source media="(max-width: 767px)" srcSet={images.mobile} />
            <img
              src={images.mobile} // Fallback to mobile image if no media query matches
              alt={title}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-2xl rounded-4xl"
              onError={() => {
                console.error(`Failed to load image for: ${title}`);
                setImageError(true);
              }}
            />
          </picture>
        ) : (
          /* Fallback placeholder */
          <div className="flex w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gray-300 rounded-full items-center justify-center">
            <span className="text-xs text-gray-600">{title}</span>
          </div>
        )}
      </div>

      {/* Card Content - Responsive spacing */}
      <div className="mt-12 sm:mt-16 md:mt-20 relative z-10">
        <h3 className="text-base sm:text-lg font-bold tracking-wider mb-3 sm:mb-4 uppercase">
          {title}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card's onClick from triggering twice
            handleShopClick();
          }}
          className="text-gray-500 hover:text-orange-300 font-bold text-xs sm:text-sm flex items-center justify-center mx-auto group-hover:text-orange-300 transition-colors duration-300 uppercase tracking-wider"
        >
          Shop{" "}
          <ChevronRight
            size={14}
            className="sm:size-4 ml-1 sm:ml-2 text-orange-400"
          />
        </button>
      </div>
    </div>
  );
};

// Main Category Section Component (Exported Component)
const CategorySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-18 sm:gap-8 md:gap-10 lg:gap-12">
          <CategoryCard
            title="HEADPHONES"
            slug="headphones" // 🎯 Added slug for navigation
            images={{
              desktop: headphonesDesktop,
              tablet: headphonesTablet,
              mobile: headphonesMobile,
            }}
          />
          <CategoryCard
            title="SPEAKERS"
            slug="speakers" // 🎯 Added slug for navigation
            images={{
              desktop: speakersDesktop,
              tablet: speakersTablet,
              mobile: speakersMobile,
            }}
          />
          <CategoryCard
            title="EARPHONES"
            slug="earphones" // 🎯 Added slug for navigation
            images={{
              desktop: earphonesDesktop,
              tablet: earphonesTablet,
              mobile: earphonesMobile,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

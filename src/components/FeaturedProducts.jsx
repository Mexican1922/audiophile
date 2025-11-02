import React from "react";
import { Link } from "react-router-dom"; // 👈 Import Link for navigation

// Import images at the top of the file
import zx9SpeakerDesktop from "../assets/Images/home/desktop/image-removebg-preview.png";
import zx9SpeakerTablet from "../assets/Images/home/tablet/image-speaker-zx9.png";
import zx9SpeakerMobile from "../assets/Images/home/mobile/image-speaker-zx9.png";
import zx7SpeakerDesktop from "../assets/Images/home/desktop/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "../assets/Images/home/tablet/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "../assets/Images/home/mobile/image-speaker-zx7.jpg";
import yx1EarphonesDesktop from "../assets/Images/home/desktop/image-earphones-yx1.jpg";
import yx1EarphonesTablet from "../assets/Images/home/tablet/image-earphones-yx1.jpg";
import yx1EarphonesMobile from "../assets/Images/home/mobile/image-earphones-yx1.jpg";

// Featured Products Section
const FeaturedProducts = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
        {/* ========================================================= */}
        {/* ZX9 SPEAKER - Orange Background */}
        {/* ========================================================= */}
        <div className="bg-orange-400 rounded-lg overflow-hidden relative">
          {/* Decorative circles pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {/* Adjusted position for better visual in Tailwind */}
            <div className="absolute -top-[150px] -left-[150px] w-[500px] h-[500px] border border-white rounded-full"></div>
            <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] border border-white rounded-full"></div>
            <div className="absolute -top-[250px] -left-[250px] w-[700px] h-[700px] border border-white rounded-full"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center px-8 py-12 lg:px-20 lg:py-24">
            {/* Speaker Image */}
            <div className="flex justify-center lg:justify-start">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={zx9SpeakerDesktop}
                />
                <source media="(min-width: 768px)" srcSet={zx9SpeakerTablet} />
                <source media="(max-width: 767px)" srcSet={zx9SpeakerMobile} />
                <img
                  src={zx9SpeakerDesktop}
                  alt="ZX9 Speaker"
                  className="w-48 h-80 lg:w-96 lg:h-[500px] object-contain relative z-10"
                />
              </picture>
            </div>

            {/* Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-wide uppercase leading-tight">
                ZX9
                <br />
                Speaker
              </h2>
              <p className="text-gray-200 mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              {/* 🎯 Link component added for navigation */}
              <Link to="/speakers/4" className="inline-block">
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 font-bold tracking-widest text-sm transition uppercase cursor-pointer">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ZX7 SPEAKER - Image Background */}
        {/* ========================================================= */}
        <div className="relative rounded-lg overflow-hidden h-80">
          <picture>
            <source media="(min-width: 1024px)" srcSet={zx7SpeakerDesktop} />
            <source media="(min-width: 768px)" srcSet={zx7SpeakerTablet} />
            <source media="(max-width: 767px)" srcSet={zx7SpeakerMobile} />
            <img
              src={zx7SpeakerDesktop}
              alt="ZX7 Speaker"
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-24">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-wide uppercase">
              ZX7 Speaker
            </h2>
            {/* 🎯 Link component added for navigation */}
            <Link to="/speakers/5" className="inline-block">
              <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 font-bold tracking-widest text-sm transition uppercase w-fit cursor-pointer">
                See Product
              </button>
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* YX1 EARPHONES - Split Layout */}
        {/* ========================================================= */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Earphones Image */}
          <div className="rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={yx1EarphonesDesktop}
              />
              <source media="(min-width: 768px)" srcSet={yx1EarphonesTablet} />
              <source media="(max-width: 767px)" srcSet={yx1EarphonesMobile} />
              <img
                src={yx1EarphonesDesktop}
                alt="YX1 Earphones"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Content Card */}
          <div className="bg-gray-100 rounded-lg px-8 lg:px-24 flex flex-col justify-center h-64 md:h-80 lg:h-96">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-wide uppercase">
              YX1 Earphones
            </h2>
            {/* 🎯 Link component added for navigation */}
            <Link to="/earphones/6" className="inline-block">
              <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 font-bold tracking-widest text-sm transition uppercase w-fit cursor-pointer">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

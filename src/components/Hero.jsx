import React from "react";
import { Link } from "react-router-dom";

import heroDesktop from "../assets/Images/home/desktop/image-hero.jpg";
import heroTablet from "../assets/Images/home/tablet/image-header.jpg";
import heroMobile from "../assets/Images/home/mobile/image-header.jpg";

const Hero = () => {
  return (
    <section className="relative w-full bg-black text-white pt-[110px] lg:pt-0 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <div
          className="md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${heroMobile}')` }}
        >
          <div className="w-full h-full `bg-gradient-to-b` from-black/70 via-black/60 to-black/40" />
        </div>

        {/* Tablet */}
        <div
          className="hidden md:block lg:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${heroTablet}')` }}
        >
          <div className="w-full h-full `bg-gradient-to-r` from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Desktop */}
        <div
          className="hidden lg:block w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${heroDesktop}')` }}
        >
          <div className="w-full h-full `bg-gradient-to-r` from-black/75 via-black/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto flex flex-col 
                   justify-center min-h-[700px] 
                   px-6 md:px-10 lg:px-24 
                   pb-[100px] lg:pb-0"
      >
        <div className="max-w-md text-center lg:text-left space-y-8">
          <p className="text-sm tracking-[0.6em] uppercase text-white/80">
            New Product
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-snug">
            XX99 Mark II <br className="lg:block hidden" /> Headphones
          </h1>

          <p className="text-white/80 text-base md:text-lg">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* See Product Button (Linked to /headphones/1) */}
          <Link
            to="/headphones/1"
            className="inline-block bg-orange-400 hover:bg-orange-300 
                       text-white uppercase text-sm font-semibold 
                       py-3 px-8 tracking-widest rounded 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

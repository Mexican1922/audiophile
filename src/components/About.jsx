import React from "react";
import aboutImage from "../assets/Images/man.png";

const About = () => {
  return (
    <section className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight tracking-wide uppercase">
              Bringing you the
              <br />
              <span className="text-orange-500">best</span> audio gear
            </h2>
            <p className="text-gray-500 leading-relaxed text-base">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          {/* Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt="Person enjoying quality audio gear"
              className="rounded-lg w-full h-80 lg:h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

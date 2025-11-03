// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-24 py-12 lg:py-16">
        {/* Orange accent bar */}
        <div className="w-24 h-1 bg-orange-primary mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Logo and Description */}
          <div className=" lg:order-1">
            <div className="mb-8 tracking-wide">
              <img
                src={logo}
                alt="Audiophile Logo"
                className="h-8 object-contain mx-auto lg:mx-0"
              />
            </div>
            <p className="text-white opacity-50 leading-relaxed max-w-lg text-sm lg:text-base">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Right Column - Navigation and Social */}
          <div className="flex flex-col gap-12 lg:items-end justify-between order-1 lg:order-2">
            {/* Navigation Links */}
            <nav>
              <ul className="flex flex-col gap-4 text-center sm:flex-row sm:gap-8 sm:text-left text-sm lg:text-base font-bold tracking-widest uppercase">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/headphones"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speakers"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/earphones"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Earphones
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Media Icons - Using Fa icons */}
            <div className="flex gap-4 self-center lg:self-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-white opacity-50 text-center lg:text-left text-sm lg:text-base mt-12 lg:mt-16">
          Copyright 2021. All Rights Reserved with ❤️ by Valentine
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import cartIcon from "../assets/Images/carts.svg";

const Navbar = ({ cartItems = [], onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black text-white py-8 border-b border-gray-700 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 lg:px-24">
        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl mr-4"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest mr-auto md:mr-10 lg:mr-auto"
        >
          <img src={logo} alt="Audiophile Logo" className="h-6 w-auto" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 uppercase text-sm font-semibold">
          <li>
            <Link
              to="/"
              className={`hover:text-orange-500 transition-colors ${
                isActive("/") ? "text-orange-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/headphones"
              className={`hover:text-orange-500 transition-colors ${
                isActive("/headphones") ? "text-orange-500" : ""
              }`}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className={`hover:text-orange-500 transition-colors ${
                isActive("/speakers") ? "text-orange-500" : ""
              }`}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/earphones"
              className={`hover:text-orange-500 transition-colors ${
                isActive("/earphones") ? "text-orange-500" : ""
              }`}
            >
              Earphones
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <button
          onClick={onCartClick}
          className="relative text-xl ml-auto outline-none cursor-pointer"
          aria-label="View shopping cart"
        >
          <img src={cartIcon} alt="Shopping Cart" className="h-6 w-auto" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-[90px] left-0 w-full bg-white text-black shadow-lg p-6 pb-20 rounded-b-lg`}
      >
        <ul className="space-y-4 uppercase text-sm font-semibold">
          <li>
            <Link
              to="/"
              className={`block py-2 hover:text-orange-500 transition-colors ${
                isActive("/") ? "text-orange-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/headphones"
              className={`block py-2 hover:text-orange-500 transition-colors ${
                isActive("/headphones") ? "text-orange-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className={`block py-2 hover:text-orange-500 transition-colors ${
                isActive("/speakers") ? "text-orange-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/earphones"
              className={`block py-2 hover:text-orange-500 transition-colors ${
                isActive("/earphones") ? "text-orange-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Earphones
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

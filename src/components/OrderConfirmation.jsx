// src/components/OrderConfirmation.jsx
import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ orderDetails, onClose }) => {
  // Generate a random order number
  const orderNumber =
    orderDetails?.orderNumber || Math.floor(Math.random() * 1000000);

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] `z-[60]` flex justify-center items-center px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl `z-[70]` animate-fadeIn text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold uppercase tracking-wider mb-4">
          THANK YOU FOR YOUR ORDER
        </h1>
        <p className="text-gray-600 mb-8">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <div className="flex justify-between items-center mb-4 pb-4 border-b">
            <span className="text-sm text-gray-600">ORDER NUMBER</span>
            <span className="font-bold">{orderNumber}</span>
          </div>

          {/* Show first item in cart */}
          {orderDetails?.items && orderDetails.items.length > 0 && (
            <div className="flex justify-between items-center mb-4 pb-4 border-b">
              <div className="flex items-center space-x-3">
                <img
                  src={orderDetails.items[0].image}
                  alt={orderDetails.items[0].name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-medium">
                    {orderDetails.items[0].name
                      .replace("HEADPHONES", "H")
                      .replace("SPEAKERS", "S")
                      .replace("EARPHONES", "E")}
                  </p>
                  <p className="text-gray-500 text-sm">
                    $ {orderDetails.items[0].price.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium">
                x{orderDetails.items[0].quantity}
              </span>
            </div>
          )}

          {/* Show additional items count if more than 1 */}
          {orderDetails?.items && orderDetails.items.length > 1 && (
            <div className="text-sm text-gray-600 mb-4 pb-4 border-b">
              and {orderDetails.items.length - 1} other item(s)
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">GRAND TOTAL</span>
            <span className="text-lg font-bold">
              ${orderDetails?.total?.toLocaleString("en-US") || "0"}
            </span>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          onClick={onClose}
          className="block w-full py-3 bg-orange-400 text-white font-semibold rounded uppercase hover:bg-orange-300 transition-colors"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

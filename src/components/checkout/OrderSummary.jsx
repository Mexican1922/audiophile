// src/components/checkout/OrderSummary.jsx
import React from "react";

const OrderSummary = ({ cartItems, onContinue }) => {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleContinue = () => {
    console.log("Continue & Pay clicked"); // Debug log
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-bold uppercase tracking-wider mb-6">
        SUMMARY
      </h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="text-sm font-medium">
                  {item.name
                    .replace("HEADPHONES", "H")
                    .replace("SPEAKERS", "S")
                    .replace("EARPHONES", "E")}
                </p>
                <p className="text-gray-500 text-sm">
                  $ {item.price.toLocaleString("en-US")}
                </p>
              </div>
            </div>
            <span className="text-sm font-medium">x{item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">TOTAL</span>
          <span className="font-medium">
            $ {subtotal.toLocaleString("en-US")}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">SHIPPING</span>
          <span className="font-medium">
            $ {shipping.toLocaleString("en-US")}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">VAT (INCLUDED)</span>
          <span className="font-medium">$ {tax.toLocaleString("en-US")}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-4">
          <span>GRAND TOTAL</span>
          <span className="text-orange-400">
            $ {total.toLocaleString("en-US")}
          </span>
        </div>
      </div>

      {/* Continue & Pay Button */}
      <button
        onClick={handleContinue}
        className="w-full py-3 mt-6 bg-orange-400 text-white font-semibold rounded uppercase hover:bg-orange-300 transition-colors"
      >
        CONTINUE & PAY
      </button>
    </div>
  );
};

export default OrderSummary;

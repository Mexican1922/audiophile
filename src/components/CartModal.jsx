// src/components/CartModal.jsx
import React from "react";

const CartModal = ({ cartItems, setCartItems, onClose, onCheckoutClick }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$ ${totalPrice.toLocaleString("en-US")}`;

  const handleRemoveAll = () => setCartItems([]);

  const handleUpdateQuantity = (itemId, change) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) return null;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter(Boolean);

    setCartItems(updatedCart);
  };

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] `z-[60]` flex justify-end md:justify-center items-start pt-[100px] px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-2xl `z-[70]` animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider">
            CART ({cartItems.length})
          </h2>
          <button
            onClick={handleRemoveAll}
            className="text-gray-500 text-sm underline hover:text-orange-400 transition"
          >
            Remove all
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 max-h-80 overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm truncate w-24">
                      {item.name
                        .replace("HEADPHONES", "H")
                        .replace("SPEAKERS", "S")
                        .replace("EARPHONES", "E")}
                    </p>
                    <p className="text-gray-500 text-sm font-bold">
                      $ {item.price.toLocaleString("en-US")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-100 rounded">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, -1)}
                    className="px-3 py-1 text-gray-600 hover:text-black font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-bold text-xs w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, 1)}
                    className="px-3 py-1 text-gray-600 hover:text-black font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <span className="uppercase text-gray-500 text-sm">TOTAL</span>
            <span className="text-xl font-bold">{formattedTotalPrice}</span>
          </div>

          <button
            onClick={onCheckoutClick}
            disabled={cartItems.length === 0}
            className={`w-full py-3 text-white font-semibold rounded uppercase transition-colors ${
              cartItems.length === 0
                ? "bg-orange-200 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

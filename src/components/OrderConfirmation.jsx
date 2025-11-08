// src/components/OrderConfirmation.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sendOrderConfirmation } from "../services/emailService";

const OrderConfirmation = ({ orderDetails, onClose }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [sending, setSending] = useState(false);

  const orderNumber =
    orderDetails?.orderNumber || Math.floor(Math.random() * 1000000);

  // Send email when component mounts
  useEffect(() => {
    if (orderDetails && orderDetails.email) {
      sendEmail();
    }
    // We intentionally include orderDetails but not sendEmail (it’s stable in this scope)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderDetails]);

  const sendEmail = async () => {
    setSending(true);

    const emailData = {
      email: orderDetails.email,
      customerName: orderDetails.customerName,
      orderNumber: orderNumber,
      items: orderDetails.items,
      subtotal: orderDetails.subtotal,
      shipping: orderDetails.shipping || 50,
      vat: orderDetails.vat,
      total: orderDetails.total,
    };

    const result = await sendOrderConfirmation(emailData);

    setSending(false);

    if (result.success) {
      setEmailSent(true);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm `z-[60]` flex justify-center items-center px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl `z-[70]` text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>

        {/* Email Status */}
        {sending && (
          <p className="text-gray-600 mb-6 text-sm">
            📧 Sending confirmation email...
          </p>
        )}
        {emailSent && (
          <p className="text-green-600 mb-6 text-sm">
            ✓ Confirmation email sent to {orderDetails.email}
          </p>
        )}
        {emailError && (
          <p className="text-orange-600 mb-6 text-sm">
            ⚠️ Order confirmed! Email will be sent shortly.
          </p>
        )}
        {!sending && !emailSent && !emailError && (
          <p className="text-gray-600 mb-6">
            You will receive an email confirmation shortly.
          </p>
        )}

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <div className="flex justify-between items-center mb-4 pb-4 border-b">
            <span className="text-sm text-gray-600 uppercase">
              Order Number
            </span>
            <span className="font-bold">#{orderNumber}</span>
          </div>

          {/* Show first item */}
          {orderDetails?.items && orderDetails.items.length > 0 && (
            <div className="mb-4 pb-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={orderDetails.items[0].image}
                    alt={orderDetails.items[0].name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {orderDetails.items[0].name
                        .replace("HEADPHONES", "HP")
                        .replace("SPEAKERS", "SP")
                        .replace("EARPHONES", "EP")}
                    </p>
                    <p className="text-gray-500 text-sm">
                      ${orderDetails.items[0].price.toLocaleString("en-US")}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">
                  x{orderDetails.items[0].quantity}
                </span>
              </div>
            </div>
          )}

          {/* Show additional items count */}
          {orderDetails?.items && orderDetails.items.length > 1 && (
            <div className="text-sm text-gray-500 text-center mb-4 pb-4 border-b">
              and {orderDetails.items.length - 1} other item(s)
            </div>
          )}

          {/* Grand Total */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 uppercase">Grand Total</span>
            <span className="text-lg font-bold text-black">
              ${orderDetails?.total?.toLocaleString("en-US") || "0"}
            </span>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          onClick={onClose}
          className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded uppercase tracking-wider transition-colors"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

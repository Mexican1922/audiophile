// src/components/checkout/PaymentDetails.jsx
import React from "react";

const PaymentDetails = ({ formData, errors, onChange }) => {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-orange-400">
        PAYMENT DETAILS
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Payment Method</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center p-4 border rounded cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="e-money"
              checked={formData.paymentMethod === "e-money"}
              onChange={onChange}
              className="mr-3"
            />
            <span>e-Money</span>
          </label>
          <label className="flex items-center p-4 border rounded cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === "cash"}
              onChange={onChange}
              className="mr-3"
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {formData.paymentMethod === "e-money" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              e-Money Number
            </label>
            <input
              type="text"
              name="eMoneyNumber"
              value={formData.eMoneyNumber}
              onChange={onChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.eMoneyNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="238521993"
            />
            {errors.eMoneyNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.eMoneyNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              e-Money PIN
            </label>
            <input
              type="text"
              name="eMoneyPin"
              value={formData.eMoneyPin}
              onChange={onChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.eMoneyPin ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="6891"
            />
            {errors.eMoneyPin && (
              <p className="text-red-500 text-xs mt-1">{errors.eMoneyPin}</p>
            )}
          </div>
        </div>
      )}

      {formData.paymentMethod === "cash" && (
        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded">
          <svg
            className="w-6 h-6 text-orange-400 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="text-sm text-gray-600">
            The 'Cash on Delivery' option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;

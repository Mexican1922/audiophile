// src/components/checkout/ShippingInfo.jsx
import React from "react";

const ShippingInfo = ({ formData, errors, onChange }) => {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-orange-400">
        SHIPPING INFO
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1137 Williams Avenue"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={onChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.zipCode ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="10001"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="New York"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={onChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="United States"
            />
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;

// src/components/checkout/BillingDetails.jsx
import React from "react";

const BillingDetails = ({ formData, errors, onChange }) => {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-orange-400">
        BILLING DETAILS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Alexei Ward"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="alexei@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+1 202-555-0136"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;

// src/components/CheckoutModal.jsx
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import BillingDetails from "./checkout/BillingDetails";
import ShippingInfo from "./checkout/ShippingInfo";
import PaymentDetails from "./checkout/PaymentDetails";
import OrderSummary from "./checkout/OrderSummary";
import OrderConfirmation from "./OrderConfirmation";

const CheckoutModal = ({ cartItems, onClose, onCheckoutComplete }) => {
  const [formData, setFormData] = useState({
    // Billing Details
    name: "",
    email: "",
    phone: "",
    // Shipping Info
    address: "",
    zipCode: "",
    city: "",
    country: "",
    // Payment Method
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Use Convex mutation to create order
  const createOrder = useMutation(api.orders.createOrder);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    // Validate payment method specific fields
    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber.trim())
        newErrors.eMoneyNumber = "e-Money Number is required";
      if (!formData.eMoneyPin.trim())
        newErrors.eMoneyPin = "e-Money PIN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    console.log("Checkout submitted");

    if (validateForm()) {
      try {
        // Calculate totals
        const subtotal = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const shipping = 50;
        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + shipping + tax;

        // Create order details
        const newOrderDetails = {
          orderNumber: Math.floor(Math.random() * 1000000),
          items: cartItems,
          subtotal,
          shipping,
          tax,
          total,
          customerInfo: {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
            country: formData.country,
          },
          paymentMethod: formData.paymentMethod,
        };

        // Create order in Convex
        const orderId = await createOrder({
          customerInfo: newOrderDetails.customerInfo,
          items: newOrderDetails.items,
          subtotal: newOrderDetails.subtotal,
          shipping: newOrderDetails.shipping,
          tax: newOrderDetails.tax,
          total: newOrderDetails.total,
          paymentMethod: newOrderDetails.paymentMethod,
        });

        console.log("Order created with ID:", orderId);

        setOrderDetails(newOrderDetails);
        setShowConfirmation(true);

        // Process checkout
        onCheckoutComplete();
      } catch (error) {
        console.error("Error creating order:", error);
        alert("There was an error processing your order. Please try again.");
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleCloseConfirmation = () => {
    console.log("Closing confirmation");
    setShowConfirmation(false);
    onClose();
  };

  // Show order confirmation if checkout was successful
  if (showConfirmation) {
    console.log("Showing order confirmation");
    return (
      <OrderConfirmation
        orderDetails={orderDetails}
        onClose={handleCloseConfirmation}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[60] flex justify-center items-start pt-[100px] px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-2xl z-[70] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onClose}
            className="mb-4 flex items-center text-gray-500 hover:text-black transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to cart
          </button>
          <h1 className="text-2xl font-bold uppercase tracking-wider">
            CHECKOUT
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            <BillingDetails
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />

            <ShippingInfo
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />

            <PaymentDetails
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
            />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary cartItems={cartItems} onContinue={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

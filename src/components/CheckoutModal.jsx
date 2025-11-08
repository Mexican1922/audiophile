import React, { useState } from "react";
import BillingDetails from "./checkout/BillingDetails";
import ShippingInfo from "./checkout/ShippingInfo";
import PaymentDetails from "./checkout/PaymentDetails";
import OrderSummary from "./checkout/OrderSummary";
import OrderConfirmation from "./OrderConfirmation";
import { saveOrder } from "../services/dataService";

const CheckoutModal = ({ cartItems, onClose, onCheckoutComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form fields before submission
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber.trim())
        newErrors.eMoneyNumber = "e-Money Number is required";
      if (!formData.eMoneyPin.trim())
        newErrors.eMoneyPin = "e-Money PIN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Combined checkout handler
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Calculate order costs
    const subtotal = cartItems.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0
    );
    const shipping = 50;
    const vat = subtotal * 0.1;
    const total = subtotal + shipping + vat;

    // ✅ Equivalent to your old handleCheckout logic, but dynamic
    const orderData = {
      email: formData.email,
      customerName: formData.name,
      orderNumber: Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      subtotal,
      shipping,
      vat,
      total,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      paymentMethod: formData.paymentMethod,
    };

    try {
      await saveOrder(orderData);
      setOrderDetails(orderData);
      setShowConfirmation(true);
      onCheckoutComplete?.();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    onClose?.();
  };

  if (showConfirmation) {
    return (
      <OrderConfirmation
        orderDetails={orderDetails}
        onClose={handleCloseConfirmation}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex justify-center items-start pt-[100px] px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-2xl `z-[70]` animate-fadeIn"
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
            Checkout
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
            <OrderSummary
              cartItems={cartItems}
              onContinue={handleSubmit}
              isLoading={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

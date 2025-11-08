// src/services/dataService.js
import { ALL_PRODUCTS } from "../data/allProducts";

// Get products from localStorage or use default
export const getProducts = () => {
  const stored = localStorage.getItem("audiophile_products");
  return stored ? JSON.parse(stored) : ALL_PRODUCTS;
};

// 🌟 NEW FUNCTION: Get ALL products (Used for Related Products calculation)
export const getAllProducts = () => getProducts();

// Get products by category
export const getProductsByCategory = (category) => {
  const products = getProducts();
  return products.filter((p) => p.category === category);
};

// ➡️ CONFIRMED: Get product by ID (Handles the Conversion)
export const getProductById = (id) => {
  const products = getProducts(); // Ensure the string 'id' from the URL is converted to an integer // to match the numeric 'p.id' in the product data.
  return products.find((p) => p.id === parseInt(id));
};

// Save order to localStorage
export const saveOrder = (orderData) => {
  const orders = JSON.parse(localStorage.getItem("audiophile_orders") || "[]");
  const newOrder = {
    ...orderData,
    id: Date.now(),
    orderNumber: Math.floor(Math.random() * 1000000),
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  localStorage.setItem("audiophile_orders", JSON.stringify(orders));
  return newOrder;
};

// Get all orders
export const getOrders = () => {
  return JSON.parse(localStorage.getItem("audiophile_orders") || "[]");
};

// Get order by ID
export const getOrderById = (id) => {
  const orders = getOrders();
  return orders.find((order) => order.id === id);
};

// Update order status
export const updateOrderStatus = (orderId, status) => {
  const orders = getOrders();
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
    localStorage.setItem("audiophile_orders", JSON.stringify(orders));
    return true;
  }
  return false;
};

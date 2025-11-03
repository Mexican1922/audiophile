// src/services/dataService.js
import { ALL_PRODUCTS } from "../data/allProducts";

// Get products from localStorage or use default
export const getProducts = () => {
  const stored = localStorage.getItem("audiophile_products");
  return stored ? JSON.parse(stored) : ALL_PRODUCTS;
};

// Get products by category
export const getProductsByCategory = (category) => {
  const products = getProducts();
  return products.filter((p) => p.category === category);
};

// Get product by ID
export const getProductById = (id) => {
  const products = getProducts();
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

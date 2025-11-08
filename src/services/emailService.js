// src/services/emailService.js
import emailjs from "@emailjs/browser";

// Replace these with YOUR actual IDs from EmailJS dashboard
const EMAIL_CONFIG = {
  serviceId: "service_hcuglq5", // Replace with your Service ID
  templateId: "template_tlld75u", // Replace with your Template ID
  publicKey: "QhFh5DvdmemxLTi9d", // Replace with your Public Key
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export const sendOrderConfirmation = async (orderData) => {
  try {
    // Format items for email
    const itemsList = orderData.items
      .map(
        (item) =>
          `${item.name} x${item.quantity} - $${item.price.toLocaleString(
            "en-US"
          )}`
      )
      .join("\n");

    // Get current date
    const orderDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Prepare template parameters
    const templateParams = {
      to_email: orderData.email,
      customer_name: orderData.customerName || "Valued Customer",
      order_number: orderData.orderNumber,
      order_date: orderDate,
      items_list: itemsList,
      subtotal: orderData.subtotal?.toLocaleString("en-US") || "0",
      shipping: orderData.shipping?.toLocaleString("en-US") || "0",
      vat: orderData.vat?.toLocaleString("en-US") || "0",
      total: orderData.total?.toLocaleString("en-US") || "0",
    };

    // Send email
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    console.log("✅ Email sent successfully!", response);
    return { success: true, response };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error };
  }
};

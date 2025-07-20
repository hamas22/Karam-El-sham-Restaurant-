import React, { useState } from "react";
import "../../styles/OrderPopup.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; 

const OrderPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: 1, 
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
     try {
    await addDoc(collection(db, "orders"), formData);
    setSubmitted(true);
  } catch (error) {
    alert("Error submitting order: " + error.message);
  }

    await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setTimeout(onClose, 3000); 
  };

  return (
  <div className="popup-overlay">
    <div className="popup-box">
      {!submitted ? (
        <>
          <h2>Place Your Order</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              min="1"
              max="20"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="Number of Meals"
            />
            <button type="submit" className="text-white">Submit Order</button>
          </form>
        </>
      ) : (
        <div style={{ position: 'relative' }}>
          <h3>Thank you! We'll contact you within 30 minutes.</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#555',
              lineHeight: '1',
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  </div>
);

};

export default OrderPopup;

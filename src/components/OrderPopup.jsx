import React, { useState } from "react";
import "../../styles/OrderPopup.css";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

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

    try {
      await addDoc(collection(db, "orders"), formData);
      setSubmitted(true);
    } catch (error) {
      alert("ُError");
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {!submitted ? (
          <>
            <h2>أرسل طلبك الآن</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="عنوان التوصيل"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف"
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
                placeholder="عدد الوجبات"
              />
              <button type="submit" className="text-white">
                إرسال الطلب
              </button>
            </form>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            <h3>شكرًا لك! سنتواصل معك خلال 30 دقيقة.</h3>
            <button
              onClick={onClose}
              aria-label="إغلاق"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#555",
                lineHeight: "1",
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

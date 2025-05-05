import React, { useState } from "react";

function OrderForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Submitted!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nDescription: ${formData.description}`);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required /><br /><br />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required /><br /><br />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required /><br /><br />
          <input type="text" name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} required /><br /><br />
          <textarea name="description" placeholder="Description of the Amount of Goods" value={formData.description} onChange={handleChange} rows="4" required ></textarea><br /><br />
          <button type="submit">Submit</button>
          <button type="button" className="close-button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
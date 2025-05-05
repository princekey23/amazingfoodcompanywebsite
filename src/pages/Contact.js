import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received:\n\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form after submission
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p>We’d love to hear from you! Whether you have questions, feedback, or want to learn more about our mission, reach out today.</p>

      <h2>Contact Details</h2>
      <ul className="contact-details">
        <li>📧 <strong>Email:</strong> <Link to="mailto:amazingfoodcompany65@gmail.com">amazingfoodcompany65@gmail.com </Link></li>
        <li>📞 <strong>Phone:</strong> <Link to="tel:+254758364736">+254758364736</Link> | <Link to="+254101771015">0101771015</Link></li>
        <li>🏠 <strong>Address:</strong> <Link to="https://www.google.com/maps/dir//Burundian+market,+Kakuma/@3.7513281,34.7288448,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x179fc724be5a72f3:0x5b885b8849d0b24e!2m2!1d34.8112468!2d3.751332?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank">Burundian market near GLAP enterprises and Lokitaung Primary School.</Link></li>
      </ul>

      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
        <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange}/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
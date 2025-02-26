import React, { useState } from "react";
import "../style/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! ✅");
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>📍 Address:</strong> Golden I Greater Noida West 201301, India.</p>
          <p><strong>📧 Email:</strong> info@mishyan.com</p>
          <p><strong>📞 Phone:</strong> +91-7217895839</p>

          {/* Google Map Embed */}
          <div className="map">
            <iframe
              title="Mishyan Software"
              src="https://maps.google.com/maps?q=Greater+Noida+West&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

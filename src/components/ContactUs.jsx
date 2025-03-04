import React, { useState } from "react";
import "../style/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Ensures 10-digit Indian number starting with 6-9
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert("🚨 Please enter a valid 10-digit phone number!");
      return;
    }

    setIsSubmitting(true);


    // Replace with your deployed Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbxt8TI8Pj9oXHBJ_jTvPzd8kHG-1qBt_LDjWlGWGKkp2EBK2pVKskoomX-yL5_gOqG_/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      const result = await response.text();

      if (result.includes("already submitted")) {
        alert("⚠️ You have already made a request today. Try again after 24 hours.");
      } else {
        alert("✅ Request submitted successfully! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error sending message. Please try again.");
    }

    setIsSubmitting(false);
  };



  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <h3>Request a callback.</h3>
          <p>We’d love to hear from you! Fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} required onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Your Phone (10 digits)" value={formData.phone} required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
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

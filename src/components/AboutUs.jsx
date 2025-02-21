import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Main Content Section */}
      <div className="about-content">
        <div className="breadcrumb">Home &gt; About Us</div>
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Mishyan Software System Private Limited</strong>, your trusted
          partner in safety and security solutions. Established in 2018 by Mr.
          Ashish Nigam, our company has quickly grown to become a{" "}
          <span className="highlight">leading manufacturer and wholesaler</span>{" "}
          in the field of fire and safety systems.
        </p>

        <h2>Our Vision</h2>
        <p>
          At Mishyan Software System Private Limited, our vision is to make the
          world a safer place. We are committed to providing high-quality and
          innovative safety solutions.
        </p>

        <h2>Our Product Range</h2>
        <ul>
          <li>Fire Alarm System</li>
          <li>Building Management System</li>
          <li>Fuel Leak Detection System</li>
          <li>Water Leak Detection System</li>
          <li>Gas Fire Suppression System</li>
        </ul>

        {/* 🔹 New Business Info Box 🔹 */}
        <div className="business-info">
          <h3>Business Information</h3>
          <p><strong>Company Name:</strong> Mishyan Software System Private Limited</p>
          <p><strong>Established:</strong> 2018</p>
          <p><strong>Location:</strong> Greater Noida West, Delhi - 201301, India</p>
          <p><strong>GST No.:</strong> 09AAHCM4589K1ZL</p>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="sidebar">
        {/* Products Section */}
        <div className="products">
          <h3>Products</h3>
          <ul>
            <li>Fire Alarm System</li>
            <li>Building Management System</li>
            <li>Fuel Leak Detection System</li>
            <li>Water Leak Detection System</li>
            <li>Gas Fire Suppression System</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contactus">
          <h3>Contact Us</h3>
          <p><strong>Mishyan Software System Private Limited</strong></p>
          <p>
            10th Floor, Unit No 1027, Gaur City-2,<br />
            Greater Noida West, Gautam Buddha Nagar, Delhi - 201301, India
          </p>
          <p><strong>Mobile:</strong> +91-7217895839</p>
          <p><strong>Email:</strong> mishyansoftware@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

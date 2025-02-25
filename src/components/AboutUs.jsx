import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Main Content Section */}
      <div className="about-content">
        <h1>About Us</h1>
        <div className="breadcrumb">Home &gt; About Us</div>
        <p>
          Welcome to <strong>Mishyan Software System Private Limited</strong>, your trusted
          partner in safety and security solutions. Established in 2018 by Mr.
          Ashish Nigam, our company has quickly grown to become a{" "}
          <span className="highlight">leading manufacturer and wholesaler</span>{" "}
          in the field of fire and safety systems. With our headquarters located in Greater Noida West, Uttar Pradesh, we are proud to serve customers across the region and beyond.
        </p>

        <h2>Our Vision</h2>
        <p>
          At Mishyan Software System Private Limited, our vision is to make the world a safer place. We believe that safety is not just a necessity but a fundamental right for everyone. We are committed to providing high-quality, reliable, and innovative safety solutions to protect lives, property, and the environment.
        </p>

        <h2>Our Product Range</h2>

        <div className="our-product-range">
          <p>Our extensive product range includes: </p>
          <p>Fire Alarm System: We offer cutting-edge fire alarm systems designed to detect and alert occupants in the event of a fire, ensuring timely evacuation and response to minimize damage.</p>

          <p>Building Management System: Our building management system allows for centralized control and monitoring of various building functions, including HVAC, lighting, security, and more, to enhance energy efficiency and security.</p>

          <p>Fuel Leak Detection System: Mishyan's fuel leak detection system is designed to prevent environmental contamination and fire hazards by promptly identifying and alerting to fuel leaks.</p>

          <p>Water Leak Detection System: Our water leak detection system helps prevent costly water damage by quickly identifying leaks
            and allowing for timely repairs.</p>

          <p>Gas Fire Suppression System: We provide advanced gas fire suppression systems to safeguard valuable assets and critical environments by suppressing fires rapidly and effectively.</p>
        </div>

        <h2>Our Commitment to Quality</h2>
        <p>
          Quality is at the core of everything we do. We take pride in manufacturing and delivering products that meet the highest industry standards for safety and performance. Our team of experts is dedicated to continuous research and development to ensure our solutions remain at the forefront of technological advancements.
        </p>

        <h2>Customer-Centric Approach </h2>
        <p>
          At Mishyan Software System Private Limited, we prioritize our customers' needs and satisfaction above all else. Our dedicated customer support team is always ready to assist you with any inquiries, technical support, or product recommendations.
        </p>

        {/* 🔹 New Business Info Box 🔹 */}
        <div className="business-info">
          <h3>Business Information</h3>


          <div className="business-info-li">
            <p><strong>Nature of Business:</strong></p>
            <p style={{ width: '45%' }}>Manufacturers, Wholesaler</p>
          </div>
          <div className="business-info-li">
            <p><strong>Number of Employees :</strong></p>
            <p style={{ width: '45%' }}>Below 20 People </p>
          </div>
          <div className="business-info-li">
            <p><strong>Year of Establishment:</strong></p>
            <p style={{ width: '45%' }}>2018</p>
          </div>
          <div className="business-info-li">
            <p><strong>Market Covered:</strong> </p>
            <p style={{ width: '45%' }}>India</p>
          </div>
          <div className="business-info-li">
            <p><strong>Name of Company Founder:</strong></p>
            <p style={{ width: '45%' }}>Mr. Ashish</p>
          </div>
          <div className="business-info-li">
            <p><strong>Annual Turnover:</strong></p>
            <p style={{ width: '45%' }}>2 Crore Approx</p>
          </div>
          <div className="business-info-li">
            <p><strong>Legal Status of Firm :</strong></p>
            <p style={{ width: '45%' }}>Private Limited</p>
          </div>
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
            Golden I<br />
            Greater Noida West 201301, India.
            {/* 10th Floor, Unit No 1027, Gaur City-2,<br />
            Greater Noida West, Gautam Buddha Nagar, Delhi - 201301, India */}
          </p>
          <p><strong>Mobile:</strong> +91-7217895839</p>
          <p><strong>Email:</strong> info@mishyan.com</p>
        </div>
      </div>
    </div >
  );
};

export default AboutUs;

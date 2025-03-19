import React from "react";
import logo from "../assets/1bg.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import "../style/Footer.css"; // Importing external CSS file

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-section">
        <div className="brand container">
          <div style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}>
            <h2>MISHYAN SOFTWARE</h2>
            <h4>&nbsp;&nbsp;&nbsp; SYSTEM PRIVATE LIMITED</h4>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul className="social-icons">
            <li><AiFillInstagram /></li>
            <li><FaFacebookF /></li>
            <li><GrLinkedinOption /></li>
            <li><BsTwitter /></li>
          </ul>
        </div>
        <div className="about container">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
          </p>
        </div>
        <div className="contact container">
          <h3>Contact Us</h3>
          <p>+91 1231231231</p>
          <p>info@mishyan.com</p>
          <p>@mishyansoftware</p>
          <p>Golden I Greater Noida West 201301, India.
          </p>
        </div>
      </footer>
      <div className="lower-footer">
        <h2>Copyright &copy; 2025 <span>Mishyan Software</span></h2>
      </div>
    </div>
  );
}

import React, {useState} from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { StickyBox } from 'react-sticky-box';
import "../style/socialMediaButtons.css";

const SocialMediaButtons = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 const handleClick = () => {
    // Replace the number with the desired WhatsApp number
    const phoneNumber = '9368789231';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp chat link
    window.open(whatsappLink, '_blank');
  };


  return (
    <div>
      <div className="social-media-buttons">
        <a
          href="https://www.facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebookF className="facebook1" />
        </a>
        <a
          href="https://www.twitter.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="whatsapp-button">
      <a
          href="https://www.instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
          onClick={()=>handleClick()}
        >
          <h6>CHAT WITH US</h6>
          <FaWhatsapp  className="whatsapp-icon"/>

          {/* {isDropdownOpen && (
           <div className="whatsapp-button-addition">
            <h6>CHAT WITH EYEZONE.COM</h6>
           </div>
          )} */}
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;

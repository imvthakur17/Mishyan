import React, { useState } from "react";
import styled from "styled-components";
import foodYummy from "../assets/1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [navbarStateName, setNavbarStateName] = useState('home');
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const navigate = useNavigate();

  const handleNavigation = (target) => {
    // if (target === "products") {
    //   navigate("/products"); // Navigate to AllProducts page
    // } else {
    //   const section = document.getElementById(target);
    //   if (section) {
    //     section.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
    if (target === "/") {
      navigate("/");
      setNavbarStateName('home')
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when clicking "Home"
    } else if (target === "products") {
      setNavbarStateName('products')
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "about") {
      setNavbarStateName('about')
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "contact") {
      setNavbarStateName('contact')
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNavbarState(false)
  };

  return (
    <>
      <Nav>
        <div className="brand">
          {/* <img src={foodYummy} alt="Icon" onClick={() => handleNavigation("/")} /> */}
          <div style={{
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            fontFamily: '"Times New Roman", Times, serif',
            cursor: "pointer",
          }}
          onClick={() => handleNavigation("/")} >
            <h2>MISHYAN SOFTWARE</h2>
            <h4>SYSTEM PRIVATE LIMITED</h4>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul>
          {/* <li onClick={() => handleNavigation("home")}>Home</li>
        <li onClick={() => handleNavigation("services")}>Services</li>
        <li onClick={() => handleNavigation("portfolio")}>Portfolio</li>
        <li onClick={() => handleNavigation("testimonials")}>Testimonials</li>
        <li onClick={() => handleNavigation("products")}>Products</li>
        <li onClick={() => handleNavigation("newsletter")}>Newsletter</li> */}
          <ul className="links">
            <li onClick={() => handleNavigation("/")}>
              <a className={navbarStateName === "home" ? "active" : 'passive'}>
                Home
              </a>
            </li>
            {/* <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li> */}
            <li onClick={() => handleNavigation("products")}>
              <a className={navbarStateName === "products" ? "active" : 'passive'}>
                Products
              </a>
            </li>
            <li onClick={() => handleNavigation("about")}>
              <a className={navbarStateName === "about" ? "active" : 'passive'}>
                About Us
              </a>
            </li>
            <li onClick={() => handleNavigation("contact")}>
              <a className={navbarStateName === "contact" ? "active" : 'passive'}>
                Contact Us
              </a>
            </li>
            {/* <li>
              <a href="#newsletter">Newsletter</a>
            </li> */}
          </ul>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className={navbarStateName === "home" ? "active" : 'passive'}
              onClick={() => handleNavigation("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={navbarStateName === "products" ? "active" : 'passive'}
              href="#products" onClick={() => handleNavigation("products")}>
              Products
            </a>
          </li>
          <li>
            <a
              className={navbarStateName === "about" ? "active" : 'passive'}
              href="#products" onClick={() => handleNavigation("about")}>
              About Us
            </a>
          </li>
          <li>
            <a
              className={navbarStateName === "contact" ? "active" : 'passive'}
              href="#newsletter" onClick={() => handleNavigation("contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  align-items: center;
  padding: 0 4vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;

  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
      cursor: pointer;
        color: #00000;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      .active {
        color: #fc4958;
      }
      .passive {
        color: #00000;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      .active {
       color: #fc4958;
       font-weight: 900;
        }

      .passive { 
        color: #f9c74f;
      }
      // &:first-of-type {
      //   a {
      //     color: #fc4958;
      //     font-weight: 900;
      //   }
      // }
    }
  }
`;

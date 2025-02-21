import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import AllProducts from "./components/AllProducts";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <MainPage />
      <Footer/>
    </Router>

  );
}
const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showPage, setShowPage] = useState('/');

  useEffect(() => {
    if (location.pathname === "/products") {
      setShowAllProducts(location.pathname === "/products");
      setShowPage('products')
    } else if (location.pathname === "/about") {
      setShowPage('about')
    } else if (location.pathname === "/contact") {
      setShowPage('contact')
    } else {
      setShowPage('/')
    }
  }, [location.pathname]);

  return (
    <>
      {showPage === 'products' ? (
        <AllProducts />
      )
        :
        showPage === 'about' ? (
          <AboutUs />
        )
          :
          showPage === 'contact' ? (
            <ContactUs />
          )
            :
            (
              <>
                <Hero id="home" />
                {/* <Services id="services" />
                <Portfolio id="portfolio" />
                <Testimonials id="testimonials" /> */}
                <Products id="products" />
                <Newsletter id="newsletter" />
              </>
            )}
    </>
  );
};
// import React, { useEffect } from "react";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Newsletter from "./components/Newsletter";
// import Portfolio from "./components/Portfolio";
// import Products from "./components/Products";
// import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import scrollreveal from "scrollreveal";
// export default function App() {
//   useEffect(() => {
//     const sr = scrollreveal({
//       origin: "top",
//       distance: "80px",
//       duration: 2000,
//       reset: false,
//     });
//     sr.reveal(
//       `
//         nav,
//         #home,
//         #services,
//         #portfolio,
//         #testimonials,
//         #products,
//         #newsletter,
//         .footer
//     `,
//       {
//         opacity: 0,
//         interval: 200,
//       }
//     );
//   }, []);
//   return (
//     <>
//       <ScrollToTop />
//       <Navbar />
//       <Hero />
//       <Services />
//       <Portfolio />
//       <Testimonials />
//       <Products />
//       <Newsletter />
//       <Footer />
//     </>
//   );
// }

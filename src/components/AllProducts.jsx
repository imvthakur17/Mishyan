import React from "react";
import "../style/AllProducts.css"; // Import the CSS file
import product14 from "../assets/product14.jpg";
import { ProductsList } from "../source/productsList";

const AllProducts = () => {
  return (
    <div className="container">
      {ProductsList.map((product) => {
        return (
          <div className="all-products-container">
            {/* Product Image Section */}
            <div className="product-image-section">
              <img
                src={product.image}
                alt="Laser Beam Detector"
                className="product-image"
              />
              <span className="image-hover-label">🔍 Hover to zoom</span>
            </div>

            {/* Product Info Section */}
            <div className="product-info">
              <h2 className="product-title">Laser Beam Detector</h2>
              <button className="get-price-btn">Get Best Price</button>

              <p className="product-details">
                MOQ: <span>1 Piece</span>
              </p>

              {/* Product Specifications */}
              <table className="product-table">
                <tbody>
                  <tr>
                    <td className="label">Business Type</td>
                    <td className="value">Manufacturer, Supplier</td>
                  </tr>
                  <tr>
                    <td className="label">Material</td>
                    <td className="value">Plastic</td>
                  </tr>
                  <tr>
                    <td className="label">Color</td>
                    <td className="value">Black, Grey</td>
                  </tr>
                  <tr>
                    <td className="label">Application</td>
                    <td className="value">Fire Safety</td>
                  </tr>
                  <tr>
                    <td className="label">Feature</td>
                    <td className="value">Light Weight, Waterproof</td>
                  </tr>
                  <tr>
                    <td className="label">Type</td>
                    <td className="value">Beam Detector</td>
                  </tr>
                  <tr>
                    <td className="label">Country of Origin</td>
                    <td className="value">India</td>
                  </tr>
                </tbody>
              </table>

              {/* Preferred Buyer Section */}
              <div className="preferred-buyer">
                <p>Preferred Buyer From</p>
                <p>Anywhere in India</p>
              </div>

              {/* Interest Button */}
              <button className="interest-btn">Yes! I am interested</button>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default AllProducts;

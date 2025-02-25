import React from "react";
import "../style/AllProducts.css"; // Import the CSS file
import { ProductsList } from "../source/productsList";

const AllProducts = () => {
  return (
    <div className="container">

      <div className="breadcrumb">Home &gt;  Products</div>

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
              <h2 className="product-title">{product.name}</h2>
              <button className="get-price-btn">Get Best Price</button>

              <p className="product-details">
                MOQ: <span>{product.moq}</span>
              </p>

              {/* Product Specifications */}
              <table className="product-table">
                <tbody>
                  <tr>
                    <td className="label">Business Type</td>
                    <td className="value">{product.bussType}</td>
                  </tr>
                  <tr>
                    <td className="label">Body Material</td>
                    <td className="value">{product.material}</td>
                  </tr>
                  <tr>
                    <td className="label">Color</td>
                    <td className="value">{product.color}</td>
                  </tr>
                  <tr>
                    <td className="label">Shape</td>
                    <td className="value">{product.shape}</td>
                  </tr>
                  <tr>
                    <td className="label">Category</td>
                    <td className="value">{product.categ}</td>
                  </tr>
                  <tr>
                    <td className="label">Usage/Application</td>
                    <td className="value">{product.usage}</td>
                  </tr>
                  <tr>
                    <td className="label">Operating Voltage</td>
                    <td className="value">{product.voltage}</td>
                  </tr>
                  <tr>
                    <td className="label">Country of Origin</td>
                    <td className="value">{product.origin}</td>
                  </tr>
                </tbody>
              </table>

              {/* Preferred Buyer Section */}
              <div className="preferred-buyer">
                <p>Preferred Buyer From</p>
                <p style={{fontWeight: 200}}>Anywhere in India</p>
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

import React, { useState } from "react";
import Prod3 from "../assets/images/products-page-heading.jpg";
import singleimg from "../assets/images/single-product-01.jpg";
import singleimg2 from "../assets/images/single-product-02.jpg";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="single-product-wrapper">
      {/* Hero Banner Section */}
      <div className="single-product-hero">
        <img src={Prod3} alt="Product header" className="hero-img" />
        <div className="hero-text-overlay">
          <h1 className="hero-title">Single Product Page</h1>
          <p className="hero-subtitle">
            Awesome & Creative HTML CSS layout by TemplateMo
          </p>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img
              src={singleimg}
              alt="Black and white sneaker"
              className="product-img"
            />
          </div>
          <div className="secondary-image">
            <img
              src={singleimg2}
              alt="Person wearing black and white sneaker"
              className="product-img"
            />
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h2 className="product-title">New Green Jacket</h2>
            <div className="product-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="product-pricing">
            <span className="price">$75.00</span>
          </div>

          <div className="product-description">
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore.
            </p>
          </div>

          <div className="product-quote">
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiuski smod.
            </blockquote>
          </div>

          <div className="product-quantity">
            <span className="quantity-label">No. of Orders</span>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={decrementQuantity}>
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>

          <div className="product-checkout">
            <div className="total-price">
              <span className="total-label">Total:</span>
              <span className="total-value">
                ${(75.0 * quantity).toFixed(2)}
              </span>
            </div>
            <button className="add-to-cart-btn" onClick={()=>{
              alert("Your items has been listed")
            }}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

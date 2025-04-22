import React from "react";
// last part of body
import explore from "../assets/images/explore-image-01.jpg";
import explore1 from "../assets/images/explore-image-02.jpg";
import insta from "../assets/images/instagram-01.jpg";
import insta1 from "../assets/images/instagram-02.jpg";
import insta2 from "../assets/images/instagram-03.jpg";
import insta3 from "../assets/images/instagram-04.jpg";
import insta4 from "../assets/images/instagram-05.jpg";

// The component uses the imported images you provided
export default function Explore() {
  return (
    <div className="container">
      {/* Products Section */}
      <div className="products-section">
        <div className="product-info">
          <h1 className="main-heading">Explore Our Products</h1>
          <p className="text-content">
            You are allowed to use this HexaShop HTML CSS template. You can feel
            free to modify or edit this layout. You can convert this template as
            any kind of ecommerce CMS theme as you wish.
          </p>

          <div className="quote-block">
            <p className="quote-text">
              You are not allowed to redistribute this template ZIP file on any
              other website.
            </p>
          </div>

          <p className="text-content">
            There are 5 pages included in this HexaShop Template and we are
            providing it to you for absolutely free of charge at our TemplateMo
            website. There are web development costs for us.
          </p>

          <p className="text-content">
            If this template is beneficial for your website or business, please
            kindly{" "}
            <a href="supportlink" className="support-link">
              support us
            </a>{" "}
            a little via PayPal. Please also tell your friends about our great
            website. Thank you.
          </p>

          <div className="discover-button-container">
            <button className="discover-button">Discover More</button>
          </div>
        </div>

        <div className="product-showcase">
          <div className="product-boxleather-bags">
            {/* <div className="product-box-content">
              <h2 className="product-title">Leather Bags</h2>
              <p className="product-subtitle">Latest Collection</p>
            </div> */}
            <img src={explore} alt="Leather Bags" className="cro-image" />
            <img src={explore1} alt="Different Types" className="cro-image1" />
          </div>

          <div className="product-boxdifferent-types">
           
            {/* <div className="product-box-content1">
              <h2 className="product-title1">Different Types</h2>
              <p className="product-subtitle1">Over 304 Products</p>
            </div> */}
           
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <h2 className="section-heading">Social Media</h2>
        <p className="section-subheading">
          Details to details is what makes Hexashop different from the other
          themes.
        </p>

        <div className="instagram-gallery">
          <div className="gallery-item">
            <img src={insta} alt="Fashion item" className="gallery-image" />
          </div>
          <div className="gallery-item">
            <img
              src={insta1}
              alt="Fashion accessory"
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img src={insta2} alt="Fashion model" className="gallery-image" />
          </div>
          <div className="gallery-item">
            <img
              src={insta3}
              alt="Fashion accessory"
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img src={insta4} alt="Fashion item" className="gallery-image" />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-heading">
            By Subscribing To Our Newsletter You Can Get 30% Off
          </h2>
          <p className="newsletter-subheading">
            Details to details is what makes Hexashop different from the other
            themes.
          </p>

          <div className="newsletter-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input
              type="email"
              placeholder="Your Email Address"
              className="form-input"
            />
            <button className="submit-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

        <div className="store-info">
          <div className="info-column">
            <h3 className="info-heading">Store Location:</h3>
            <p className="info-text">
              Sunny Isles Beach, FL
              <br />
              33160, United States
            </p>

            <h3 className="info-heading">Phone:</h3>
            <p className="info-text">010-020-0340</p>

            <h3 className="info-heading">Office Location:</h3>
            <p className="info-text">North Miami Beach</p>
          </div>

          <div className="info-column">
            <h3 className="info-heading">Work Hours:</h3>
            <p className="info-text">
              07:30 AM - 9:30 PM
              <br />
              Daily
            </p>

            <h3 className="info-heading">Email:</h3>
            <p className="info-text">info@company.com</p>

            <h3 className="info-heading">Social Media:</h3>
            <p className="info-text">
              Facebook, Instagram,
              <br />
              Behance, Linkedin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

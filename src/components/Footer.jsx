import React from "react";
import logo2 from "../assets/images/white-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column brand-column">
            <div className="brand">
              <img src={logo2} alt="Hexashop Logo" className="footer-logo" />
            </div>
            <div className="contactinfo">
              <p>16501 Collins Ave, Sunny Isles Beach,</p>
              <p>FL 33160, United States</p>
              <p className="contact-email">hexashop@company.com</p>
              <p className="contact-phone">010-020-0340</p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Shopping & Categories</h3>
            <ul className="footer-links">
              <li>
                <a href="men">Men's Shopping</a>
              </li>
              <li>
                <a href="womens">Women's Shopping</a>
              </li>
              <li>
                <a href="kids">Kid's Shopping</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Useful Links</h3>
            <ul className="footer-links">
              <li>
                <a href="home">Homepage</a>
              </li>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="help">Help</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Help & Information</h3>
            <ul className="footer-links">
              <li>
                <a href="help">Help</a>
              </li>
              <li>
                <a href="Faq">FAQ's</a>
              </li>
              <li>
                <a href="shopping">Shipping</a>
              </li>
              <li>
                <a href="tracking">Tracking ID</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.</p>
            <p>Design: TemplateMo</p>
          </div>

          <div className="social-links">
            <a href="facebook.com" className="social-link facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="twitter.com" className="social-link twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="linked.com" className="social-link linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="behance.com" className="social-link behance">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

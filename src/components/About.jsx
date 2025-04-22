import React from "react";
import aboutimg from "../assets/images/about-us-page-heading.jpg";
import service from "../assets/images/service-01.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Banner Section */}
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className="overlay">
          <div className="banner-content">
            <h1>About Our Company</h1>
            <p>Awesome, clean & creative HTML5 Template</p>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="about-content-section">
        <div className="content-container">
          <div className="image-container">
            <img src={service} alt="Store display with SALE sign" />
          </div>
          <div className="text-container">
            <h2>About Us & Our Skills</h2>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore.
            </p>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiuski smod kon tempor incididunt ut labore.
            </blockquote>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="social-icons">
              <a href="facebook.com" className="icon-circle">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="twitter.com" className="icon-circle">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="linkedin.com" className="icon-circle">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="behance.com" className="icon-circle">
                <i className="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

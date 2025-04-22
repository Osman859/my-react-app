import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToExplore = (e) => {
    e.preventDefault();
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const mensCrousel = (e) => {
    e.preventDefault();
    const mensCrousel = document.getElementById("menscrousel");
    if (mensCrousel) {
      mensCrousel.scrollIntoView({ behavior: "smooth" });
    }
  };
  const womensCrousel = (e) => {
    e.preventDefault();
    const womensCrousel = document.getElementById("womenscrousel");
    if (womensCrousel) {
      womensCrousel.scrollIntoView({ behavior: "smooth" });
    }
  };
  const kidsCrousel = (e) => {
    e.preventDefault();
    const kidsCrousel = document.getElementById("kidscrousel");
    if (kidsCrousel) {
      kidsCrousel.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header">
      <div className="ulli">
        <img src={logo} alt="logo" className="logo" />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={mensCrousel}>
              <Link to="/">Men's</Link>
            </li>
            <li onClick={womensCrousel}>
              <Link to="/">Women's</Link>
            </li>
            <li onClick={kidsCrousel}>
              <Link to="/">Kid's</Link>
            </li>
            <li className="dropdown-container">
              <a href="/pages" className="dropdown-toggle">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/single-product">Single Product</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown-container">
              <a href="/contact" className="dropdown-toggle">
                Features
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#feature1">Feature 1</a>
                </li>
                <li>
                  <a href="#feature2">Feature 2</a>
                </li>
                <li>
                  <a href="#feature3">Feature 3</a>
                </li>
                <li>
                  <a href="#feature4">Feature 4</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#explore-section" onClick={scrollToExplore}>
                Explore
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

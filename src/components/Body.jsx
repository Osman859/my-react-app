import React from "react";
import leftbanner from "../assets/images/left-banner-image.jpg";
import rightbanner2 from "../assets/images/baner-right-image-01.jpg";
import rightbanner3 from "../assets/images/baner-right-image-02.jpg";
import rightbanner4 from "../assets/images/baner-right-image-03.jpg";
import rightbanner5 from "../assets/images/baner-right-image-04.jpg";
import Crousel from "./Crousel";
import Explore from "./Explore";

const Body = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="main-banner">
          <img src={leftbanner} className="bodyimg1" alt="bodim" />
          <div className="bodytxt1">
            <h1 className="h1">We Are Hexashop</h1>
            <p className="p1">Awesome, clean & creative HTML5 Template</p>
            <a href="purchasenow" className="a1">
              Purchase Now!
            </a>
          </div>
        </div>

        <div className="right-banners">
          <div className="banner-item">
            <img src={rightbanner2} className="category-img" alt="rightbn" />
            <div className="overlay">
              <h1 className="category-title">Women</h1>
              <p className="category-subtitle">Best Clothes For Women</p>
            </div>
          </div>

          <div className="banner-item">
            <img src={rightbanner3} className="category-img" alt="right3" />
            <div className="overlay">
              <h1 className="category-title">Men</h1>
              <p className="category-subtitle">Best Clothes For Men</p>
            </div>
          </div>

          <div className="banner-item">
            <img src={rightbanner4} className="category-img" alt="righ4" />
            <div className="overlay">
              <h1 className="category-title">Kids</h1>
              <p className="category-subtitle">Best Clothes For Kids</p>
            </div>
          </div>

          <div className="banner-item">
            <img src={rightbanner5} className="category-img" alt="righ5" />
            <div className="overlay">
              <h1 className="category-title">Accessories</h1>
              <p className="category-subtitle">Best Trend Accessories</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr3" />
      <Crousel />
      <Explore />
    </div>
  );
};

export default Body;

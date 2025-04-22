import React, { useState } from "react";
//Crousel Picture starts
// Mens pictures
import classicSpring from "../assets/images/men-01.jpg";
import airForce1 from "../assets/images/men-02.jpg";
import loveNana from "../assets/images/men-03.jpg";
import loveNana1 from "../assets/images/men-03.jpg";
// Women's pictures
import newGreen from "../assets/images/women-01.jpg";
import classicSpringWomen from "../assets/images/women-02.jpg";
import springCollection from "../assets/images/women-03.jpg";
//Kid's pictures
import schoolCollection from "../assets/images/kid-01.jpg";
import summerCamp from "../assets/images/kid-02.jpg";
import winterCollection from "../assets/images/kid-03.jpg";
//Crousel Picture ends

const Crousel = () => {
  const [menCurrentIndex, setMenCurrentIndex] = useState(0);
  const [womenCurrentIndex, setWomenCurrentIndex] = useState(0);
  const [kidsCurrentIndex, setKidsCurrentIndex] = useState(0);

  // Sample product data - replace with your actual data
  const menProducts = [
    {
      id: 1,
      name: "Classic Spring",
      price: "$120.00",
      rating: 5,
      image: classicSpring,
    },
    {
      id: 2,
      name: "Air Force 1 X",
      price: "$90.00",
      rating: 5,
      image: airForce1,
    },
    {
      id: 3,
      name: "Love Nana '20",
      price: "$150.00",
      rating: 5,
      image: loveNana,
    },
    {
      id: 4,
      name: "Love Nana '21",
      price: "$150.00",
      rating: 5,
      image: loveNana1,
    },
  ];

  const womenProducts = [
    {
      id: 5,
      name: "New Green",
      price: "$200.00",
      rating: 4,
      image: newGreen,
    },
    {
      id: 6,
      name: "Classic Dress",
      price: "$180.00",
      rating: 5,
      image: classicSpringWomen,
    },
    {
      id: 7,
      name: "Spring Collection",
      price: "$220.00",
      rating: 5,
      image: springCollection,
    },
  ];

  const kidsProducts = [
    {
      id: 8,
      name: "School Collection",
      price: "$120.00",
      rating: 5,
      image: schoolCollection,
    },
    {
      id: 9,
      name: "Summer Camp",
      price: "$90.00",
      rating: 5,
      image: summerCamp,
    },
    {
      id: 10,
      name: "Winter Collection",
      price: "$110.00",
      rating: 5,
      image: winterCollection,
    },
  ];

  const renderStars = (count) => {
    return Array(count).fill("★").join("");
  };

  const nextMenSlide = () => {
    setMenCurrentIndex((prevIndex) =>
      prevIndex + 1 >= menProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevMenSlide = () => {
    setMenCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? menProducts.length - 1 : prevIndex - 1
    );
  };

  const nextWomenSlide = () => {
    setWomenCurrentIndex((prevIndex) =>
      prevIndex + 1 >= womenProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevWomenSlide = () => {
    setWomenCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? womenProducts.length - 1 : prevIndex - 1
    );
  };

  const nextKidsSlide = () => {
    setKidsCurrentIndex((prevIndex) =>
      prevIndex + 1 >= kidsProducts.length ? 0 : prevIndex + 1
    );
  };

  const prevKidsSlide = () => {
    setKidsCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? kidsProducts.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible products for men (showing 3 at a time)
  const visibleMenProducts = [];
  for (let i = 0; i < 3; i++) {
    const index = (menCurrentIndex + i) % menProducts.length;
    visibleMenProducts.push(menProducts[index]);
  }

  // Calculate visible products for women (showing 3 at a time)
  const visibleWomenProducts = [];
  for (let i = 0; i < 3; i++) {
    const index = (womenCurrentIndex + i) % womenProducts.length;
    visibleWomenProducts.push(womenProducts[index]);
  }

  // Calculate visible products for kids (showing 3 at a time)
  const visibleKidsProducts = [];
  for (let i = 0; i < 3; i++) {
    const index = (kidsCurrentIndex + i) % kidsProducts.length;
    visibleKidsProducts.push(kidsProducts[index]);
  }

  // Product card component with hover actions
  const ProductCard = ({ product }) => (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-actions">
        <button className="action-button">Add to Cart</button>
        <button className="action-button">View Details</button>
      </div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-rating">{renderStars(product.rating)}</div>
      <p className="product-price">{product.price}</p>
    </div>
  );

  return (
    <div>
      {/* Men's Carousel */}
      <div className="product-carousel" id="menscrousel">
        <h1 className="ph1">Men's Latest</h1>
        <p className="hp1">
          Details to details is what makes Hexashop different from the other
          themes.
        </p>

        {/* Navigation buttons */}
        <button className="nav-button prev-button" onClick={prevMenSlide}>
          &lt;
        </button>

        <div className="products-container">
          {visibleMenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="nav-button next-button" onClick={nextMenSlide}>
          &gt;
        </button>
      </div>

      {/* Women's Carousel */}
      <div className="product-carousel" id="womenscrousel">
        <h1 className="ph1">Women's Latest</h1>
        <p className="hp1">Elegant designs for the modern woman at Hexashop.</p>

        {/* Navigation buttons */}
        <button className="nav-button prev-button" onClick={prevWomenSlide}>
          &lt;
        </button>

        <div className="products-container">
          {visibleWomenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="nav-button next-button" onClick={nextWomenSlide}>
          &gt;
        </button>
      </div>

      {/* Kids' Carousel */}
      <div className="product-carousel" id="kidscrousel">
        <h1 className="ph1">Kids' Latest</h1>
        <p className="hp1">
          Comfortable and stylish clothing for the little ones at Hexashop.
        </p>

        {/* Navigation buttons */}
        <button className="nav-button prev-button" onClick={prevKidsSlide}>
          &lt;
        </button>

        <div className="products-container">
          {visibleKidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="nav-button next-button" onClick={nextKidsSlide}>
          &gt;
        </button>

        <hr className="hr2" />
      </div>
    </div>
  );
};

export default Crousel;

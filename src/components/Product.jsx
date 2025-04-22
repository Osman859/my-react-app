import React from 'react'
import Prod from "../assets/images/products-page-heading.jpg"
import Crousel from './Crousel';

const Product = () => {
  return (
    <div className="prod-section-wrapper">
      <div className="prod-hero-banner">
        <img src={Prod} alt="Product header" className='proimg' />
        <div className="prod-text-overlay">
          <h1 className='hp'>Check Our Products</h1>
          <p className='hpp'>Awesome & Creative HTML CSS layout by TemplateMo</p>
        </div>
      </div>
      <Crousel/>
    </div>
  )
}

export default Product;
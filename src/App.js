import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Body from './components/Body';
import NotFound from './components/NotFound';
import About from './components/About';
import Footer from './components/Footer';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import ContactUs from './components/ContactUs';

function App() {
  return (

   
    <div>
       
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes> 
      <Footer/>

    </Router>

  
    </div>
  );

   
}

export default App;

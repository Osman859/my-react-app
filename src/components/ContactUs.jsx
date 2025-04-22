import React, { useState } from "react";
import contactUS from "../assets/images/about-us-page-heading.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending to an API
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Banner Section */}
      <div className="contact-hero">
        <img
          src={contactUS}
          alt="Contact us header"
          className="contact-hero-img"
        />
        <div className="contact-text-overlay">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Awesome, clean & creative HTML5 Template
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch With Us</h2>
            <p>
              Have questions about our products or services? Need help with an
              order? We're here to help! Fill out the form and our team will get
              back to you shortly.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Commerce Street, City Center, State 12345</p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p>info@yourcompany.com</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <div className="responsive-map">
          {/* You would typically use a Google Maps or other map embed here */}
          <div className="map-placeholder">
            <p>Google Maps would be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

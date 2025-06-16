// src/Pages/About.jsx

import React from "react";
import { FaUsers, FaShoppingBag, FaSmile } from "react-icons/fa";
import "./About.css";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";

const About = () => {
  return (
    <>
    <Nav/>
    <div className="about-container">
      <section className="about-hero">
        <h1>About <span className="highlight">Us</span></h1>
        <p>We are passionate about delivering fashion with style, quality, and confidence.</p>
      </section>

      <section className="about-details">
        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Who We Are</h3>
          <p>
            We are a team of fashion-forward thinkers bringing you the latest clothing trends. Our goal is to make shopping fun, easy, and personal.
          </p>
        </div>
        <div className="about-card">
          <FaShoppingBag className="about-icon" />
          <h3>What We Offer</h3>
          <p>
            From casual wear to party looks, we offer a curated selection of styles that suit your personality and vibe.
          </p>
        </div>
        <div className="about-card">
          <FaSmile className="about-icon" />
          <h3>Why Choose Us</h3>
          <p>
            We promise great quality, fast delivery, and unbeatable customer service—because your happiness is our success!
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;

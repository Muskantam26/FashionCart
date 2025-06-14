import React from "react";
import Carousel from "react-bootstrap/Carousel"
import './Product.css';
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="product-page">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 product-carousel-img"
            src=""
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Latest Arrivals</h3>
            <p>New trendy clothing for your collection.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 product-carousel-img"
            src=""
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Exclusive Deals</h3>
            <p>Flat 40% off this season!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="products-container">
        <h2 className="text-center mt-5 text-white">Our Products</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          <ProductCard
            img=""
            title="Stylish Shirt"
            price="₹899"
          />
          <ProductCard
            img=""
            title="Denim Jeans"
            price="₹1199"
          />
          <ProductCard
            img=""
            title="Black Jacket"
            price="₹1799"
          />
        </div>
      </section>
    </div>
  );
};

export default Products;

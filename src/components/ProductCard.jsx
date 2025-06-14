import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ img, title, price }) => {
  return (
    <div className="card bg-dark text-white product-card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: {price}</p>
        <a href="#" className="btn btn-outline-light">
          <FaCartPlus /> Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

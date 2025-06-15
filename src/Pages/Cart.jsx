import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import './Cart.css'; // Optional for external styling
import Footer from '../components/Footer';

const Cart = () => {
  const location = useLocation();
  const newItem = location.state?.item;

  const [cartItems, setCartItems] = useState(() => {
    // Retrieve saved cart from localStorage if available
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (newItem) {
      setCartItems(prev => {
        const updatedCart = [...prev, newItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }, [newItem]);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <>
    <div className="cart-container">
      <h2 className="cart-title"><FaShoppingCart /> Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="remove-btn" onClick={() => handleRemove(index)}>
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-msg">🛍️ Your cart is empty.</p>
      )}
    </div>
  <Footer/>
    </>
  );
};

export default Cart;

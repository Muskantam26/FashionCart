import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data to localStorage
    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered successfully! Now login.");
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

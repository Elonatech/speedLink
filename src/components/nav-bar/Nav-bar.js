import React from 'react';
import './Nav-bar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About Us</a>
          <div className="dropdown">
            <a href="#link1" className="dropdown-item">Link 1</a>
            <a href="#link2" className="dropdown-item">Link 2</a>
            <a href="#link3" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#link" className="nav-link">Services</a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#link" className="nav-link">Case Study</a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#product" className="nav-link">Product</a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#resources" className="nav-link">Resources</a>
        </li>
        <li className="search-icon">🔍</li>
        <li>
          <a href="#getintouch" className="get-in-touch-button">Get in Touch</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

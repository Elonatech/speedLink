import React from 'react';
import './Nav-bar.css';
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

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
          <a href="#about" className="nav-link">About Us <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#link1" className="dropdown-item">Link 1</a>
            <a href="#link2" className="dropdown-item">Link 2</a>
            <a href="#link3" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#link" className="nav-link">Services <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#link" className="nav-link">Case Study <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#product" className="nav-link">Product <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#link" className="dropdown-item">Link 1</a>
            <a href="#link" className="dropdown-item">Link 2</a>
            <a href="#link" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#resources" className="nav-link">Resources <RiArrowDropDownLine className='dropdown-icon'/></a>
        </li>
        <IoSearch className="search-icon"/>
        <li>
          <a href="#getintouch" className="get-in-touch-button">Get in Touch</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

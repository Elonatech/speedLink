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
            <a href="#whoweare" className="dropdown-item">Who we are</a>
            <a href="#whatwedo" className="dropdown-item">What we do</a>
            <a href="#whyspeedlink" className="dropdown-item">Why Speedlink</a>
            <a href="#meetourteam" className="dropdown-item">Meet our Team</a>
            <a href="#partnersandclients" className="dropdown-item">Our partners & top Clients</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">Services <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#itservices" className="dropdown-item">IT Services</a>
            <a href="#softwaredev" className="dropdown-item">Software Application Development</a>
            <a href="#webdesign" className="dropdown-item">Web design/development</a>
            <a href="#softwareinstallations" className="dropdown-item">Software installations</a>
            <a href="#cloudservices" className="dropdown-item">Cloud Services</a>
            <a href="#storageinfra" className="dropdown-item">Storage infrastructure</a>
            <a href="#cloudhosting" className="dropdown-item">Cloud hosting</a>
            <a href="#cloudbasederp" className="dropdown-item">Cloud based ERP/CRM</a>
            <a href="#networkingservices" className="dropdown-item">Networking Services</a>
            <a href="#fibertohome" className="dropdown-item">Fiber-to-the-home</a>
            <a href="#routing" className="dropdown-item">Routing and Switching</a>
            <a href="#voip" className="dropdown-item">Voice Over Internet Protocol - VOIP</a>
            <a href="#isp" className="dropdown-item">Internet Service Provider - ISP</a>
            <a href="#digitalmarketing" className="dropdown-item">Digital Marketing</a>
            <a href="#smm" className="dropdown-item">Social Media Marketing</a>
            <a href="#digitalads" className="dropdown-item">Digital Advertising</a>
            <a href="#mediaplanning" className="dropdown-item">Media Planning and Buying</a>
            <a href="#seo" className="dropdown-item">Search Engine Optimization</a>
            <a href="#techsecurity" className="dropdown-item">Technical Security</a>
            <a href="#cctv" className="dropdown-item">Video Surveillance (CCTV)</a>
            <a href="#ips" className="dropdown-item">Intrusion Prevention Systems</a>
            <a href="#firedetection" className="dropdown-item">Fire detection and fire extinguisher systems</a>
            <a href="#alarms" className="dropdown-item">Alarm zs</a>
            <a href="#certtraining" className="dropdown-item">Certified Training</a>
            <a href="#mikrotik" className="dropdown-item">Mikrotik Certification</a>
            <a href="#cctvinstall" className="dropdown-item">CCTV Installation</a>
            <a href="#webappdev" className="dropdown-item">Web app development</a>
            <a href="#webdesignanddev" className="dropdown-item">Web design and Development</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#casestudy" className="nav-link">Case Study <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#casestudy1" className="dropdown-item">Link 1</a>
            <a href="#casestudy2" className="dropdown-item">Link 2</a>
            <a href="#casestudy3" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#product" className="nav-link">Product <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#product1" className="dropdown-item">Link 1</a>
            <a href="#product2" className="dropdown-item">Link 2</a>
            <a href="#product3" className="dropdown-item">Link 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#resources" className="nav-link">Resources <RiArrowDropDownLine className='dropdown-icon'/></a>
          <div className="dropdown">
            <a href="#resource1" className="dropdown-item">Link 1</a>
            <a href="#resource2" className="dropdown-item">Link 2</a>
            <a href="#resource3" className="dropdown-item">Link 3</a>
          </div>
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

import React, { useState } from 'react';
import './Nav-bar.css';
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GoSquare } from "react-icons/go";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
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
            <div className="dropdown aboutOne">
              <div className="grid-container">
                <div className="grid-item">
                  <h3>IT Services</h3>
                  <a href="#softwaredev" className="dropdown-item"><GoSquare className= 'squareIcon'/>Software Application Development</a>
                  <a href="#webdesign" className="dropdown-item"><GoSquare className= 'squareIcon'/>Web design/development</a>
                  <a href="#softwareinstallations" className="dropdown-item"><GoSquare className= 'squareIcon'/>Software installations</a>
                </div>
                <div className="grid-item">
                  <h3>Cloud Services</h3>
                  <a href="#storageinfra" className="dropdown-item"><GoSquare className= 'squareIcon'/>Storage infrastructure</a>
                  <a href="#cloudhosting" className="dropdown-item"><GoSquare className= 'squareIcon'/>Cloud hosting</a>
                  <a href="#cloudbasederp" className="dropdown-item"><GoSquare className= 'squareIcon'/>Cloud based ERP/CRM</a>
                </div>
                <div className="grid-item">
                  <h3>Networking Services</h3>
                  <a href="#fibertohome" className="dropdown-item"><GoSquare className= 'squareIcon'/>Fiber-to-the-home</a>
                  <a href="#routing" className="dropdown-item"><GoSquare className= 'squareIcon'/>Routing and Switching</a>
                  <a href="#voip" className="dropdown-item"><GoSquare className= 'squareIcon'/>Voice Over Internet Protocol - VOIP</a>
                  <a href="#isp" className="dropdown-item"><GoSquare className= 'squareIcon'/>Internet Service Provider - ISP</a>
                </div>
                <div className="grid-item">
                  <h3>Digital Marketing</h3>
                  <a href="#smm" className="dropdown-item"><GoSquare className= 'squareIcon'/>Social Media Marketing</a>
                  <a href="#digitalads" className="dropdown-item"><GoSquare className= 'squareIcon'/>Digital Advertising</a>
                  <a href="#mediaplanning" className="dropdown-item"><GoSquare className= 'squareIcon'/>Media Planning and Buying</a>
                  <a href="#seo" className="dropdown-item"><GoSquare className= 'squareIcon'/>Search Engine Optimization</a>
                </div>
                <div className="grid-item">
                  <h3>Technical Security</h3>
                  <a href="#cctv" className="dropdown-item"><GoSquare className= 'squareIcon'/>Video Surveillance (CCTV)</a>
                  <a href="#ips" className="dropdown-item"><GoSquare className= 'squareIcon'/>Intrusion Prevention Systems</a>
                  <a href="#firedetection" className="dropdown-item"><GoSquare className= 'squareIcon'/>Fire detection and fire extinguisher systems</a>
                  <a href="#alarms" className="dropdown-item"><GoSquare className= 'squareIcon'/>Alarm systems</a>
                </div>
                <div className="grid-item">
                  <h3>Certified Training</h3>
                  <a href="#mikrotik" className="dropdown-item"><GoSquare className= 'squareIcon'/>Mikrotik Certification</a>
                  <a href="#cctvinstall" className="dropdown-item"><GoSquare className= 'squareIcon'/>CCTV Installation</a>
                  <a href="#webappdev" className="dropdown-item"><GoSquare className= 'squareIcon'/>Web app development</a>
                  <a href="#webdesignanddev" className="dropdown-item"><GoSquare className= 'squareIcon'/>Web design and Development</a>
                </div>
              </div>
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
            <a href="https://laptop-taupe.vercel.app/" className="dropdown-item">Laptop</a>
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

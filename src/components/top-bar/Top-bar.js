// TopBar.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Top-bar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedin className="icon" />
        <FaInstagram className="icon" />
      </div>
      <div className="right">
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>tel: +2349167716220 </span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>info@speedlinkng.com</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

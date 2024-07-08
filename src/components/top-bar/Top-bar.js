// TopBar.js
import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope, } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import './Top-bar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left move">
        <FaFacebookF className="icon background"/>
        <FaTwitter className="icon background" />
        <FaLinkedinIn className="icon background"/>
        <FaInstagram className="icon background" />
      </div>
      <div className="right">
        <div className="contact-item">
          <FaPhoneAlt className="icon phone"/>
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

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // Make sure to create a CSS file for the styles if you prefer

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer.png" alt="Speedlink Logo" /> {/* Add your logo URL here */}
        </div>
        <p>
          Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of technical expertise, strategic thinking, and hands-on skills.
        </p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Digital Services</li>
          <li>Cloud Services</li>
          <li>Networking Services</li>
          <li>Certified Training</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Our Products</li>
          <li>Case Studies</li>
          <li>Who we are</li>
          <li>Why choose us</li>
          <li>What we do</li>
          <li>Meet our Team</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Locate us</h3>
        <p>
          Road 6 Extension, Okey Wali Estate, Rumuologu, Port Harcourt, Rivers State
        </p>
        <p><FaPhone /> +2349167716220</p>
        <p><FaEnvelope /> admin@speedlinkng.com</p>
        <div className="footer-social">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;

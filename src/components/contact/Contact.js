import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer.png" alt="Speedlink Logo" className="footer-logo" />
        <p>
          Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of
          technical expertise, strategic thinking, and hands-on skills.
        </p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li className='first'> <IoMdArrowDropright className='arrow'/> Digital Services</li>
          <hr></hr>
          <li className='first'><IoMdArrowDropright className='arrow'/> Cloud Services</li>
          <hr></hr>
          <li className='first'><IoMdArrowDropright className='arrow'/> Networking Services</li>
          <hr></hr>
          <li className='first'> <IoMdArrowDropright className='arrow'/> Certified Training</li>
          <hr/>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li className='second'> <IoMdArrowDropright className='arrow'/> Our Products</li>
          <li className='second'> <IoMdArrowDropright className='arrow'/> Case Studies</li>
          <li className='second'> <IoMdArrowDropright className='arrow'/> Who we are</li>
          <li className='second'> <IoMdArrowDropright className='arrow'/> Why choose us</li>
          <li className='second'> <IoMdArrowDropright className='arrow'/> What we do</li>
          <li className='second'> <IoMdArrowDropright className='arrow'/> Meet our Team</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Locate us</h3>
        <address>
          Road 6 Extension, Okey Wali Estate, Rumualoglu, Port Harcourt, Rivers State
        </address>
        <p className='align-center'><FaPhoneAlt className="icon"/> +2349167716220</p>
        <p className='align-center'><FaEnvelope className="icon"/> admin@speedlinkng.com</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Contact;

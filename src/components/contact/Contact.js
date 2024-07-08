import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  // State to manage expanded state for each service item
  const [expandedItems, setExpandedItems] = useState({
    digitalServices: false,
    cloudServices: false,
    networkingServices: false,
    certifiedTraining: false,
  });

  // Function to toggle expansion state for each service item
  const toggleExpand = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item],
    });
  };

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
          <li className={`first ${expandedItems.digitalServices ? 'expanded' : ''}`} onClick={() => toggleExpand('digitalServices')}>
            {expandedItems.digitalServices ? <IoMdArrowDropup className='arrow'/> : <IoMdArrowDropright className='arrow'/>}
            Digital Services
          </li>
          <hr className={expandedItems.digitalServices ? 'expanded' : ''}></hr>
          <li className={`first ${expandedItems.cloudServices ? 'expanded' : ''}`} onClick={() => toggleExpand('cloudServices')}>
            {expandedItems.cloudServices ? <IoMdArrowDropup className='arrow'/> : <IoMdArrowDropright  className='arrow'/>}
            Cloud Services
          </li>
          <hr className={expandedItems.cloudServices ? 'expanded' : ''}></hr>
          <li className={`first ${expandedItems.networkingServices ? 'expanded' : ''}`} onClick={() => toggleExpand('networkingServices')}>
            {expandedItems.networkingServices ? <IoMdArrowDropup className='arrow'/> : <IoMdArrowDropright  className='arrow'/>}
            Networking Services
          </li>
          <hr className={expandedItems.networkingServices ? 'expanded' : ''}></hr>
          <li className={`first ${expandedItems.certifiedTraining ? 'expanded' : ''}`} onClick={() => toggleExpand('certifiedTraining')}>
            {expandedItems.certifiedTraining ? <IoMdArrowDropup className='arrow'/> : <IoMdArrowDropright  className='arrow'/>}
            Certified Training
          </li>
          <hr className={expandedItems.certifiedTraining ? 'expanded' : ''}></hr>
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

import React from 'react';
import './Hero-section.css';
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="background-video" autoPlay loop muted>
      <source src="https:\/\/speedlinkng.com\/wp-content\/uploads\/2022\/09\/Circuit-27725.mp4" type="video/mp4" />
    </video>
      <div className="content">
        <h1>We provide comprehensive IT solutions that makes businesses standout</h1>
        <p>We’re a team of IT experts who help you transform and scale your organization</p>
        <button className="cta-button">
          <span className="arrow"><FaArrowRight className='icon-arrow'/></span> IT SOLUTIONS AND SERVICES
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

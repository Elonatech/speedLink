import React from 'react';
import './Hero-section.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="background-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/assets/icons/circuit-27725.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>We provide comprehensive IT solutions that makes businesses standout</h1>
        <p>We’re a team of IT experts who help you transform and scale your organization</p>
        <button className="cta-button">
          <span className="arrow">→</span> IT SOLUTIONS AND SERVICES
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

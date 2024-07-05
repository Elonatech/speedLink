import React from 'react';
import './Services.css';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-content">
        <div className="text-content">
          <h2 className='heading2'>SPEEDLINK HI-TECH SOLUTIONS LIMITED</h2>
          <h3 className='heading3'>A complete Solution IT provider</h3>
          <p className='paragraph'>Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems provider, known for providing clients with Enterprise world-class solutions addressing their local business needs. We deliver positive, rapid and the best return on investment “ROI” solutions for our customers.</p>
          <button className="cta-button">who we are</button>
        </div>
        <div className="image-content">
          <img src="https://speedlinkng.com/wp-content/uploads/2022/08/Speed-web-01-1024x682.jpg" alt="Service" />
        </div>
      </div>
      <div className="service-box">
        <img src="https://speedlinkng.com/wp-content/uploads/2024/02/pearson-vue-1.gif" alt="Service Box" />
        <div className='text-container'>
        <h2>Pursue Your Certification Dreams with Speedlink!</h2>
        <p>We’re excited to announce that we’re now an official Pearson VUE testing center! Schedule your exam today and unlock your full potential..</p>
        </div>
        <button className="cta-button box-button">Get Certified</button>
      </div>
    </section>
  );
};

export default ServiceSection;

import React from 'react';
import './TopClient.css'; // Import external CSS file

const TopClients = () => {
  return (
    <div className="container">
      <h2 className="title">Our Top Clients</h2>
      <div className='container-dot'>
      <span>•</span> <span >•</span> <span>•</span> <span className='dash'>—</span>
      </div>
      <p>Meet our happy clients</p>
      <div className="clients">
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png" alt="CGRP, University of Port Harcourt" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png" alt="Laser Engineering and Resources Consultants Limited" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png" alt="Foundation for Agric and Social Transformation" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png" alt="Primerose High School" />
      </div>
    </div>
  );
};

export default TopClients;

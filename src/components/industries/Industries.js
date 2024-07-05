import React from 'react';
import './Industries.css';

const industries = [
  { name: 'Retail, Ecommerce', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/online-shop.png' },
  { name: 'Education & e-learning', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/elearning.png' },
  { name: 'Healthcare & Fitness', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/fitness.png' },
  { name: 'Social Networking', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/global-network.png' },
  { name: 'Logistics & Distribution', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/logistics.png' },
  { name: 'Government institutions', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/enterprise.png' },
  { name: 'Real Estate', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/real-estate.png' },
  { name: 'Travel & Hospitality', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/room-service.png' },
  { name: 'Food & Restaurant', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/restaurant-1.png' },
  { name: 'On-Demand Solutions', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/solution.png' }
];

const Industries = () => {
  return (
    <div className="industries">
      <h2>Industries We Serve</h2>
      <p>Perfect Blend of Innovation & Ideation Of Solutions For Every Industry.</p>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <img src={industry.icon} alt={industry.name} className="industry-icon" />
            <h3>{industry.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;

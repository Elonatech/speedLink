import React, { useState } from 'react';
import './Feature-section.css';

const services = [
  'IT Services',
  'Network Services',
  'Technical Security',
  'Digital Marketing',
  'Cloud Services',
  'Collaboration System',
  'Certified Training'
];

const serviceDetails = {
  'Technical Security': {
    title: 'TECHNICAL SECURITY',
    description: [
      'Video surveillance',
      'Intrusion prevention systems',
      'GPS tracking system',
      'Access control and time-attendance solutions'
    ],
    image: '/path/to/image.png'
  }
};

const Services = () => {
  const [activeService, setActiveService] = useState('Technical Security');

  return (
    <div className="services">
      <h2 className='heading2'>Services we offer</h2>
      <p className='para'>We offer a wide range of specialized services designed to meet your goals</p>
      <div className="services-container">
        <div className="services-list">
          {services.map((service) => (
            <div
              key={service}
              className={`service-item ${activeService === service ? 'active' : ''}`}
              onClick={() => setActiveService(service)}
            >
              {service}
            </div>
          ))}
        </div>
        <div className="service-details">
          <div className="details-header">
            <button className="who-we-do-button">Who we do</button>
          </div>
          <div className="details-content">
          <div>
            <h3>{serviceDetails[activeService].title}</h3>
            <ul>
              {serviceDetails[activeService].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="explore-more-button">Explore More <span className='arrow'>&rarr;</span></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import './Feature-section.css';
import { BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

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
  'IT Services': {
    title: 'IT SERVICES',
    description: [
      'Software Application Development',
      'Software Installation',
      'Web design and development'
    ],
    image: '/path/to/image.png'
  },
  'Network Services': {
    title: 'NETWORKING SERVICES',
    description: [
      'Routing and Switching',
      'VOIP – Voice over Internet Protocol',
      'Fibre to the home',
      'ISP – Internet Service Provider'
    ],
    image: '/path/to/image.png'
  },
  'Technical Security': {
    title: 'TECHNICAL SECURITY',
    description: [
      'Video surveillance',
      'Intrusion prevention systems',
      'GPS tracking system',
      'Access control and time-attendance solutions'
    ],
    image: '/path/to/image.png'
  },
  'Digital Marketing': {
    title: 'DIGITAL MARKETING',
    description: [
      'Social Media Marketing',
      'Digital Advertising',
      'Media planning and buying',
      'Search Engine Optimization',
      'Email marketing'
    ],
    image: '/path/to/image.png'
  },
  'Cloud Services': {
    title: 'CLOUD SERVICES',
    description: [
      'Storage Infrastructure',
      'Cloud Hosting',
      'Cloud Based ERP/CRM'
    ],
    image: '/path/to/image.png'
  },
  'Collaboration System': {
    title: 'COMMUNICATION & COLLABORATION SYSTEM',
    description: [
      'Audio & Video conferencing',
      'Live Streaming',
      'Radio Communications Systems'
    ],
    image: '/path/to/image.png'
  },
  'Certified Training': {
    title: 'CERTIFIED TRAINING',
    description: [
      'Mikrotik Certification',
      'CCTV Installation',
      'Web app development',
      'Web design and Development'
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
              onMouseEnter={() => setActiveService(service)}
            >
              {service}
            </div>
          ))}
        </div>
        <div className="service-details">
          <div className="details-header">
            <button className="who-we-do-button wta-btn">Who we do <BiLogoTelegram className='tel-icon'/> </button>
          </div>
          <div className="details-content">
            <div>
              <h3>{serviceDetails[activeService].title}</h3>
              <ul>
                {serviceDetails[activeService].description.map((item, index) => (
                  <li key={index}><IoIosArrowForward className='arrow'/> {item}</li>
                ))}
              </ul>
              <button className="explore-more-button">Explore More <FaArrowRight className='explor-arr'/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

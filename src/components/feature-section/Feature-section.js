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
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Network Services': {
    title: 'NETWORKING SERVICES',
    description: [
      'Routing and Switching',
      'VOIP – Voice over Internet Protocol',
      'Fibre to the home',
      'ISP – Internet Service Provider'
    ],
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Technical Security': {
    title: 'TECHNICAL SECURITY',
    description: [
      'Video surveillance',
      'Intrusion prevention systems',
      'GPS tracking system',
      'Access control and time-attendance solutions'
    ],
    image: 'https://media.istockphoto.com/id/1477430518/photo/medical-cybersecurity-tablet-and-hands-of-doctor-surgeon-or-nurse-with-virtual-hologram-for.jpg?s=2048x2048&w=is&k=20&c=reSUAXLFGLrKYPEcNwCNshs3DxHTSGou559Wwuhn-kA='
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
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D'
  },
  'Cloud Services': {
    title: 'CLOUD SERVICES',
    description: [
      'Storage Infrastructure',
      'Cloud Hosting',
      'Cloud Based ERP/CRM'
    ],
    image: 'https://media.istockphoto.com/id/1695598546/photo/businessman-using-tablet-to-transfer-data-on-cloud-computing-seamless-data-transfer-and.webp?b=1&s=170667a&w=0&k=20&c=cV19qWSSMWVTunFQHjGdxOgmDMFqTZ972atFPYd9mtc='
  },
  'Collaboration System': {
    title: 'COMMUNICATION & COLLABORATION SYSTEM',
    description: [
      'Audio & Video conferencing',
      'Live Streaming',
      'Radio Communications Systems'
    ],
    image: 'https://media.istockphoto.com/id/1478421401/photo/diverse-male-and-female-warehouse-inventory-managers-talking-using-laptop-computer-and.webp?b=1&s=170667a&w=0&k=20&c=IeHQmHLyw3imdCqaKHBUkOs6T2CVs3mwRzoWIFI2N9M='
  },
  'Certified Training': {
    title: 'CERTIFIED TRAINING',
    description: [
      'Mikrotik Certification',
      'CCTV Installation',
      'Web app development',
      'Web design and Development'
    ],
    image: 'https://media.istockphoto.com/id/619257608/photo/paraplegic-person-receiving-certificate-after-seminar.jpg?s=2048x2048&w=is&k=20&c=24SktNjDUs6EBwCKXl7wpYQ_QPf_AsOe3--0_p8Bjq8='
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
        <div className={`service-details service-details-${activeService.replace(/\s+/g, '_')}`}>
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

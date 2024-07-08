import React, { useState } from 'react';
import './Products.css';
import { BiLogoTelegram } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

const products = [
  { name: 'DIGISCHOOL', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg', description: 'Comprehensive solution for administration, documentation, tracking, reporting, and automation for primary and secondary schools.' },
  { name: 'SPEEDUCATION', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg', description: 'All in one learning management system for colleges and higher institutions' },
  { name: 'SPEED ERP SOLUTION', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/erp-600x600.jpg', description: 'managing routine business operations like accounting, purchasing, project management, risk management, and compliance' }
];

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="products">
      <h4>Our Products</h4>
      <h2>Comprehensive IT SOLUTIONS that sets your business apart</h2>
      <p>Bringing Speed to your business</p>
      <div className="products-grid">
        {products.map((product, index) => (
          <div 
            className="product-card" 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="product-icon-container">
              <img src={product.icon} alt={product.name} className="product-icon" />
            </div>
            <div className={`product-name-container ${hoveredIndex === index ? 'hovered' : ''}`}>
              <h3>{product.name}</h3>
              {hoveredIndex === index && (
                <div className="product-details">
                  <p>{product.description}</p>
                  <button className="product-cta-button"> <FaLongArrowAltRight className='arrow'/>Learn More</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="view-products-button">View all our products <BiLogoTelegram className='tel-icon'/></button>
    </div>
  );
};

export default Products;

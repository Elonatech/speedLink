import React from 'react';
import './Products.css';

const products = [
  { name: 'DIGISCHOOL', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg' },
  { name: 'SPEEDUCATION', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg' },
  { name: 'SPEED ERP SOLUTION', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/erp-600x600.jpg' }
];

const Products = () => {
  return (
    <div className="products">
      <h4>Our Products</h4>
      <h2>Comprehensive IT SOLUTIONS that sets your business apart</h2>
      <p>Bringing Speed to your business</p>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon-container">
              <img src={product.icon} alt={product.name} className="product-icon" />
            </div>
            <div className="product-name-container">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="view-products-button">View all our products</button>
    </div>
  );
};

export default Products;

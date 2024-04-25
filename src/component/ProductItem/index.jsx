import React from 'react';
import './index.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img
        className="image-product"
        src={product.imageUrl}
        alt="product-item"
      />
      <div className="product-info-container">
        <p style={{ color: '#9E3500', fontWeight: 'bold' }}>Just In</p>
        <p style={{ fontWeight: 'bold' }}>{product.title}</p>
        <p style={{ color: '#707072' }}>{product.type}</p>
        <p style={{ color: '#707072' }}>{product.quantity}</p>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      margin: '0.5rem',
      borderRadius: '8px',
      width: '220px',
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;

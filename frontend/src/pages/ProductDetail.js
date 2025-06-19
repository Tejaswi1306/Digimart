import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p style={{ marginTop: '1rem' }}>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
    </div>
  );
};

export default ProductDetail;

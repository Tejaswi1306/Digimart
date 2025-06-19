import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/productService';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Browse Digital Products</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

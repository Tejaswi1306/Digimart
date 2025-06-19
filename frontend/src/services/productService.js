// src/services/productService.js

const mockProducts = [
  {
    id: 1,
    name: 'Minimal Resume Template',
    price: 199,
    image: 'https://via.placeholder.com/200x120?text=Resume',
    description: 'Clean and professional resume template in Word and PDF format.',
  },
  {
    id: 2,
    name: 'Instagram Icon Pack',
    price: 149,
    image: 'https://via.placeholder.com/200x120?text=Icons',
    description: '50+ custom icons for Instagram stories and highlights.',
  },
  {
    id: 3,
    name: 'Landing Page UI Kit',
    price: 299,
    image: 'https://via.placeholder.com/200x120?text=UI+Kit',
    description: 'Responsive and modern UI kit for startup landing pages.',
  },
];

// Simulated API call (Promise)
export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const product = mockProducts.find((p) => p.id === parseInt(id));
    setTimeout(() => resolve(product), 500);
  });
};

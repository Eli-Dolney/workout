// src/data/products.js
export const products = [
    {
      id: 'product1',
      name: 'Product 1',
      price: 29.99,
      description: 'A high-quality product designed to meet your needs. Made from durable materials, perfect for any occasion.',
      image: new URL('@/assets/images/eisley1.jpg', import.meta.url).href // Adjust the path based on your image location
    },
    {
      id: 'product2',
      name: 'Product 2',
      price: 49.99,
      description: 'This premium item is crafted to perfection and ensures a great experience.',
      image: new URL('@/assets/images/eisley2.jpg', import.meta.url).href
    },
    {
      id: 'product3',
      name: 'Product 3',
      price: 39.99,
      description: 'An excellent choice for those looking for quality and performance.',
      image: new URL('@/assets/images/eisley3.jpg', import.meta.url).href
    }
    // Add more products as needed
  ];
  
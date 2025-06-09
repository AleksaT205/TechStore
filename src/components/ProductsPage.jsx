import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductsPage({ products }) {
  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '0', 
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          // paddingRight: 0,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}





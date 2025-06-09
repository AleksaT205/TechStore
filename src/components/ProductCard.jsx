import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!addToCart) {
    return null; // Kontekst nije dostupan
  }

  const handleAdd = (e) => {
    e.stopPropagation(); // da klik na dugme ne aktivira klik na celu karticu
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // poruka nestaje posle 2s
  };

  const openDetails = () => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div
      onClick={openDetails}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
        width: '250px',
        height: '400px',         
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',           
          height: '200px',         
          objectFit: 'cover',      
          borderRadius: '8px',
          marginBottom: '0.8rem',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <h3 style={{ margin: '0.5rem 0', color: '#2c3e50' }}>{product.name}</h3>
      <p style={{ fontWeight: 'bold', color: 'rgb(2, 96, 203)', marginBottom: '1rem', textAlign: 'left' }}>
        {product.price.toFixed(2)} €
      </p>
      <button
        onClick={handleAdd}
        style={{
          padding: '0.5rem 1.5rem',
          backgroundColor: '#2c3e50',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1b2733'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2c3e50'}
      >
        Dodaj u korpu
      </button>
      {added && (
        <p style={{ color: 'green', marginTop: '0.5rem', fontWeight: 'bold' }}>
          Proizvod dodat u korpu!
        </p>
      )}
    </div>
  );
};

export default ProductCard;


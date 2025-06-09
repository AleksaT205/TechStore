import React, { useState } from 'react';
import { CartProvider } from './CartContext.jsx';
import ProductsPage from './ProductsPage.jsx';
import SearchBar from './SearchBar.jsx';
import { products } from '../data/products.js';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('sve');

  const filteredProducts = products.filter(p =>
    (categoryFilter === 'sve' || p.category === categoryFilter) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
        <main style={{ padding: '1rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
        />
        <ProductsPage products={filteredProducts} />
        </main>
    </CartProvider>
  );
}


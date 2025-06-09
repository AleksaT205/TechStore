import React from 'react';
import { CartProvider } from './CartContext.jsx';
import CartPage from './CartPage.jsx';

export default function CartApp() {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
}

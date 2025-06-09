import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext.jsx';
import '../styles/CartPage.css';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!cart) {
    return <p className="error">Greška: Kontekst korpe nije dostupan.</p>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (cart.length === 0) return alert('Korpa je prazna!');
    localStorage.setItem('lastOrder', JSON.stringify(cart));
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <>
      <a href="/" className="back-link fixed">← Nazad na početnu</a>
      <div className="cart-container">
        {orderPlaced ? (
          <>
            <h2>Porudžbina uspešno poslata!</h2>
            <p>Hvala što ste kupili kod nas.</p>
            <button className="btn" onClick={() => setOrderPlaced(false)}>Nazad na korpu</button>
          </>
        ) : (
          <>
            <h2>🛒 Vaša korpa</h2>
            {cart.length === 0 ? (
              <p className="empty-message">Korpa je prazna.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span><strong>{item.name}</strong> — {item.quantity} x {item.price} €</span>
                    <button className="btn btn-remove" onClick={() => removeFromCart(item.id)}>Ukloni</button>
                  </div>
                ))}
                <p className="total"><strong>Ukupno:</strong> {total.toFixed(2)} €</p>
                <button className="btn btn-order" onClick={handleOrder}>Poruči</button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}






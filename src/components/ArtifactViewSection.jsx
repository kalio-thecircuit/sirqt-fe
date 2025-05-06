import React from 'react';

export default function BasketSection() {
  return (
    <div className="basket-section">
      <div className="basket-header">
        <h2>Basket</h2>
      </div>
      
      <div className="delivery-slot">
        <div>Select delivery slot</div>
      </div>
      
      <div className="basket-items">
        <div className="basket-item-placeholder">Basket items will appear here</div>
      </div>
      
      <div className="basket-summary">
        <div className="total">
          <span>Basket total</span>
          <span>$0.00</span>
        </div>
        <button className="checkout-button">Continue to checkout</button>
      </div>
    </div>
  );
}
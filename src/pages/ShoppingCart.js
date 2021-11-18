import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
      </div>
    );
  }
}

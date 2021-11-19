import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <div><ProductDetail /></div>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
      </div>
    );
  }
}

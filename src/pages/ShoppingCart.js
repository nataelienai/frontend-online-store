import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        { cart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map(({ title, id, thumbnail }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <h5 data-testid="shopping-cart-product-name">{ title }</h5>
              <h5 data-testid="shopping-cart-product-quantity">1</h5>
            </div>
          ))}
        <button type="button">
          <Link to="/">Home</Link>
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default ShoppingCart;

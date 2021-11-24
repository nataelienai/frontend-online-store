import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cart, addToCart, removeFromCart, decreaseQuantityOf } = this.props;
    const cartProducts = Object.values(cart);

    return (
      <div>
        { cartProducts.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cartProducts.map(({ product, quantity }) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h4 data-testid="shopping-cart-product-name">{ product.title }</h4>
              <div>
                <button
                  type="button"
                  onClick={ () => removeFromCart(product) }
                >
                  X
                </button>
                <button
                  type="button"
                  onClick={ () => decreaseQuantityOf(product) }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>
                <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
                <button
                  type="button"
                  onClick={ () => addToCart(product) }
                  data-testid="product-increase-quantity"
                >
                  +
                </button>
              </div>
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
  cart: PropTypes.objectOf(PropTypes.any),
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  decreaseQuantityOf: PropTypes.func,
}.isRequired;

export default ShoppingCart;

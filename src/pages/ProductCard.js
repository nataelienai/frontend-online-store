import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  addToCart = () => {
    const { onAdd, product } = this.props;
    onAdd(product);
  }

  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div>
        <Link to={ `/product-detail/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <img src={ thumbnail } alt={ title } />
            <h4>{ title }</h4>
            <h4>{ `R$${price}` }</h4>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
  onAdd: PropTypes.func,
}.isRequired;

export default ProductCard;

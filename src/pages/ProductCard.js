import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <Link to={ `/product-detail/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
          <h4>{ `R$${price}` }</h4>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default ProductCard;

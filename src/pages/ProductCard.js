import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h4>{ title }</h4>
        <h4>{ `R$${price}` }</h4>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default ProductCard;

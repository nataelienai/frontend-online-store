import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListProducts extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <section>
        {!list.length
          ? <h4>Nenhum produto foi encontrado </h4>
          : list.map((product, key) => <ProductCard key={ key } product={ product } />)}
      </section>
    );
  }
}

ListProducts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default ListProducts;

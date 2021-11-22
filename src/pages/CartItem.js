import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
    };
  }

  quantityHandle =({ target }, id) => {
    const { quantity } = this.state;
    const { name } = target;
    const { setTheQuantity } = this.props;

    const value = name === 'add' ? quantity + 1 : quantity - 1;
    const min = quantity === 1 && name === 'subtract';

    this.setState({ quantity: min ? 1 : value }, () => {
      const { state } = this;
      setTheQuantity(state.quantity, id);
    });
  }

  render() {
    const { quantity } = this.state;
    const { title, id, price, thumbnail, removeTheItem } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          {title}
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h4>
          { `R$: ${price.toFixed(2) * quantity}` }
        </h4>
        <button
          type="button"
          name="subtract"
          data-testid="product-decrease-quantity"
          onClick={ (event) => this.quantityHandle(event, id) }
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">
          { quantity }
        </div>
        <button
          type="button"
          name="add"
          data-testid="product-increase-quantity"
          onClick={ (event) => this.quantityHandle(event, id) }
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => removeTheItem(id) }
        >
          Remover
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  setQuantity: PropTypes.func,
  quantity: PropTypes.number,
  removeItem: PropTypes.func,
}.isRequired;

export default CartItem;

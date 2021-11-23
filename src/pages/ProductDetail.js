import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDetail } from '../services/api';
import EvaluationForm from './EvaluationForm';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };

    this.showData = this.showDetail.bind(this);
  }

  componentDidMount() {
    this.showDetail();
  }

  async showDetail() {
    const { match: { params: { id } } } = this.props;
    const product = await getDetail(id);

    this.setState({ product });
  }

  render() {
    const { addToCart } = this.props;
    const { product } = this.state;
    const { title, price, thumbnail, attributes = [] } = product;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h1>
        <img src={ thumbnail } alt={ title } />
        <div>
          <h2>Especificações técnicas</h2>
          <ul>
            {
              attributes.map((e) => (
                <li key={ e.id } htmlFor={ e.id } data-testid="category">
                  { `${e.name}: ${e.value_name}`}
                </li>
              ))
            }
          </ul>
        </div>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho de compras
          </Link>
        </button>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <EvaluationForm />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func,
}.isRequired;

import React from 'react';
import { Link } from 'react-router-dom';
import { getDetail } from '../services/api';

export default class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      atributo: [],
    };
    this.showData = this.showDetail.bind(this);
  }

  componentDidMount() {
    this.showDetail();
  }

  async showDetail() {
    const { attributes } = await getDetail('MLB2027933292');
    this.setState({ atributo: attributes });
  }

  render() {
    const { atributo } = this.state;
    return (
      <div data-testid="product-detail-name">
        <ul>
          {
            atributo.map((e) => (
              <li key={ e.id } htmlFor={ e.id } data-testid="category">
                { `${e.name}: ${e.value_name}`}
              </li>
            ))
          }
        </ul>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho de compras
          </Link>
        </button>
      </div>
    );
  }
}

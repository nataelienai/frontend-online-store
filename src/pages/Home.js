import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async handleInputChange({ target: { id } }) {
    const response = await getProductsFromCategoryAndQuery(id, '');

    this.setState({
      products: response.results,
    });
  }

  async fetchCategories() {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories, products } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho de compras
          </Link>
        </button>
        <div>
          {
            categories.map(({ id, name }) => (
              <label key={ id } htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  value={ name }
                  onChange={ this.handleInputChange }
                />
                { name }
              </label>
            ))
          }
        </div>
        <div>
          {products.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{ product.title }</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ `R$ ${product.price}` }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

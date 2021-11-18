import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories } = this.state;

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
                <input type="radio" name="category" id={ id } value={ name } />
                { name }
              </label>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;

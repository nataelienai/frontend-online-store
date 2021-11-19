import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListProducts from './ListProducts';
import SearchButton from './SearchButton';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      list: [],
      category: '',
      input: '',
      submit: false,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleClick = () => {
    const { input, category } = this.state;
    this.setState(async () => {
      const getProductList = await getProductsFromCategoryAndQuery(category, input);
      this.setState({
        list: getProductList.results,
        submit: true,
      });
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchCategories() {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories, list, input, submit } = this.state;

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
          <SearchButton
            value={ input }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
          />
        </div>
        <div>
          {
            categories.map(({ id, name }) => (
              <label key={ id } htmlFor={ id } data-testid="category">
                <input type="radio" name="category" id={ id } value={ name } />
                { name }
              </label>
            ))
          }
          <div>
            {submit && <ListProducts list={ list } />}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

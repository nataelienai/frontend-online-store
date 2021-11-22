import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListProducts from './ListProducts';
import SearchButton from './SearchButton';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.isComponentMounted = false;

    this.state = {
      categories: [],
      list: [],
      category: '',
      input: '',
      submit: false,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.fetchCategories();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  async handleCategoryChange({ target: { id } }) {
    const { input } = this.state;
    const response = await getProductsFromCategoryAndQuery(id, input);

    if (this.isComponentMounted) {
      this.setState({
        list: response.results,
        category: id,
        submit: true,
      });
    }
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

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addToCart = (product) => {
    const { onAdd } = this.props;
    onAdd(product);
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
            onChange={ this.handleInputChange }
            onClick={ this.handleClick }
          />
        </div>
        <div>
          {
            categories.map(({ id, name }) => (
              <label key={ id } htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  value={ name }
                  onChange={ this.handleCategoryChange }
                />
                { name }
              </label>
            ))
          }
          <div>
            {submit && <ListProducts list={ list } onAdd={ this.addToCart } />}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Home;

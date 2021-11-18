import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.decreaseQuantityOf = this.decreaseQuantityOf.bind(this);
  }

  addToCart(item) {
    this.setState((state) => {
      const { cart } = state;
      const { id } = item;
      const products = {
        ...cart,
        [id]: { product: item, quantity: 1 },
      };

      if (cart[id]) {
        products[id].quantity = cart[id].quantity + 1;
      }
      return { cart: products };
    });
  }

  removeFromCart(item) {
    this.setState((state) => {
      const { cart } = state;
      const { id } = item;

      delete cart[id];
      return { cart };
    });
  }

  decreaseQuantityOf(item) {
    this.setState((state) => {
      const { cart } = state;
      const { id } = item;

      if (cart[id].quantity > 0) {
        return {
          cart: {
            ...cart,
            [id]: { product: item, quantity: cart[id].quantity - 1 },
          },
        };
      }
      return null;
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home onAdd={ this.addToCart } />
          </Route>
          <Route
            exact
            path="/product-detail/:id"
            render={ (props) => (
              <ProductDetail { ...props } addToCart={ this.addToCart } />
            ) }
          />
          <Route exact path="/shopping-cart">
            <ShoppingCart
              cart={ cart }
              addToCart={ this.addToCart }
              removeFromCart={ this.removeFromCart }
              decreaseQuantityOf={ this.decreaseQuantityOf }
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

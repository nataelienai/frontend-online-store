import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    const { cart } = this.state;

    this.setState({
      cart: [...cart, item],
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
          {/* <Route exact path="/shopping-cart" component={ ShoppingCart } /> */}
          <Route exact path="/shopping-cart">
            <ShoppingCart cart={ cart } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

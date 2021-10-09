import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CartContextProvider } from "./context/CartContext";

import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/category/:category">
              <ItemListContainer />
            </Route>

            <Route path="/item/:title">
              <ItemDetailContainer />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;

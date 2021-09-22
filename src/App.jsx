import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/views/Contacto";
import Carrito from "./components/views/Carrito";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route path="/category/:category">
            <ItemListContainer />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/item/:title">
            <ItemDetailContainer />
          </Route>

          <Route path="/cart">
            <Carrito />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

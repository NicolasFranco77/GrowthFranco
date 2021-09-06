import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting={<h1>Hola! Pronto encontrarás los mejores productos aquí</h1>}
      />
    </>
  );
}

export default App;

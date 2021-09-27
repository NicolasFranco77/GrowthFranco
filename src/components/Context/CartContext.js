import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState(undefined);
  const [quantity, setQuantity] = useState(0);

  const removeItem = (itemId) => {
    const newList = productsCart.filter((item) => item.id !== itemId);
    setProductsCart(newList);
  };

  const changeQuantity = (count) => {
    setQuantity(count);
  };

  const clear = () => {
    setProductsCart(undefined);
    setQuantity(0);
  };

  const addItem = (item, quantity) => {
    setProductsCart(item, quantity);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addItem,
        clear,
        changeQuantity,
        quantity,
        removeItem,
        setProductsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

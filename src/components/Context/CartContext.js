import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [navQuantity, setNavQuantity] = useState(0);

  

const isInCart = (item,count) => {

 const productsCartId = productsCart?.map((item) => item.id);

    if (productsCartId?.includes(item.id)) {
      const updateCart = productsCart?.map((i) => {
        if (i.id === item.id) {
          let oldQuantity = i.quantity;
          return {
            ...i,
            quantity: count + oldQuantity,
          };
        } else {
          return i;
        }
      });
      setProductsCart(updateCart);
    } else {
      const newProduct = {
        ...item,
        quantity: count,
      };

      productsCart
        ? addItem([...productsCart, newProduct])
        : addItem([newProduct]);
    }
  
}

  const removeItem = (itemId) => {
    const newList = productsCart.filter((item) => item.id !== itemId);
    setProductsCart(newList);
  };
  const changeNavQuantity = (count) => {
    setNavQuantity(count);
  };

  const changeQuantity = (count) => {
    setQuantity(count);
  };

  const clear = () => {
    setProductsCart([]);
    setQuantity(0);
    setNavQuantity(0);
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
        changeNavQuantity,
        navQuantity,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

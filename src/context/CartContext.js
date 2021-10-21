import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getQuantity = () => {
    let quantity = 0;
    productsCart.forEach((prod) => {
      quantity = quantity + prod.quantity;
    });
    return quantity;
  };

  const getProduct = (id) => {
    return productsCart.find((prod) => prod.id === id);
  };

  const getPrice = () => {
    const totalArray = productsCart.map(
      (itemCart) => itemCart.price * itemCart.quantity
    );
    let total = 0;
    totalArray.forEach((itemPrice) => {
      total = total + itemPrice;
    });
    setTotalPrice(total);
  };

  const isInCart = (id) => {
    return productsCart.some((prod) => prod.id === id);
  };

  const removeItem = (itemId) => {
    const newList = productsCart.filter((item) => item.id !== itemId);
    setProductsCart(newList);
  };

  const clear = () => {
    setProductsCart([]);
  };

  const addItem = (item, quantity) => {
    const newProduct = {
      ...item,
      quantity: quantity,
    };

    if (!isInCart(item.id)) {
      setProductsCart([...productsCart, newProduct]);
    } else {
      const newCartProducts = productsCart.map((prod) => {
        if (prod.id === item.id) {
          const newProduct = {
            ...prod,
            quantity: quantity,
          };
          return newProduct;
        } else {
          return prod;
        }
      });
      setProductsCart(newCartProducts);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        productsCart,
        clear,
        getQuantity,
        removeItem,
        setProductsCart,
        isInCart,
        getPrice,
        totalPrice,
        getProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

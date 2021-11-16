import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartStorage = JSON.parse(window.localStorage.getItem("cartItems"));
  const [productsCart, setProductsCart] = useState(cartStorage || [] );
  const [totalPrice, setTotalPrice] = useState(0);

  const setLocalStorage = (value) => {
    try {
      setProductsCart(value);
      window.localStorage.setItem("cartItems", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };



  const getQuantity = () => {
    let quantity = 0;
    productsCart?.forEach((prod) => {
      quantity = quantity + prod.quantity;
    });
    return quantity;
  };

  const getProduct = (id) => {
    return productsCart?.find((prod) => prod.id === id);
  };

  const getPrice = () => {
    const totalArray = productsCart?.map(
      (itemCart) => itemCart.price * itemCart.quantity
    );
    let total = 0;
    totalArray?.forEach((itemPrice) => {
      total = total + itemPrice;
    });
    setTotalPrice(total);
  };

  const isInCart = (id) => {
    return productsCart?.some((prod) => prod.id === id);
  };

  const removeItem = (itemId) => {
    const newList = productsCart?.filter((item) => item.id !== itemId);
    setLocalStorage(newList);
  };

  const clear = () => {
    setLocalStorage([]);
  };

  const addItem = (item, quantity) => {
    const newProduct = {
      ...item,
      quantity: quantity,
    };

    if (!isInCart(item.id)) {
      setLocalStorage([...productsCart, newProduct]);
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
      setLocalStorage(newCartProducts);
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

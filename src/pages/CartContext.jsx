import React, { createContext, useContext, useState } from 'react';

// Cart Context Create
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to Add Item to Cart
  const addToCart = (mobile) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === mobile.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === mobile.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...mobile, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

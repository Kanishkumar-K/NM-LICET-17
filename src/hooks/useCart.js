// src/hooks/useCart.js

import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Other cart-related functions

  return { cart, addToCart };
};

export default useCart;

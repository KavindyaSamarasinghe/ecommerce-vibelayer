import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "LKR";
  const delivery_fee = 350;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }

    setCartItems(prevCart => {
      const newCart = { ...prevCart };

      if (!newCart[itemId]) {
        newCart[itemId] = {};
      }

      if (!newCart[itemId][size]) {
        newCart[itemId][size] = 1;
      } else {
        newCart[itemId][size] += 1;
      }

      return newCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

import React, { createContext, useState, useEffect } from "react";  // Added useEffect import
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// Create the context here, not import it
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
      
      // If this item ID doesn't exist yet in the cart
      if (!newCart[itemId]) {
        newCart[itemId] = {};
      }
      
      // If this size doesn't exist yet for this item
      if (!newCart[itemId][size]) {
        newCart[itemId][size] = 1;
      } else {
        // Increment quantity for this size
        newCart[itemId][size] += 1;
      }
      
      return newCart;
    });
  };

  // Log cart items whenever they change
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
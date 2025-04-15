import React, { createContext, useState } from "react";
import { products } from "../assets/assets";

// Create the context here, not import it
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = "LKR";
  const delivery_fee = 350;
  const[search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
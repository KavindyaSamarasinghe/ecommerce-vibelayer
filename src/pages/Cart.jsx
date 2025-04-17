import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; // adjust the path as needed

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      const itemSizes = cartItems[productId];
      for (const size in itemSizes) {
        const quantity = itemSizes[size];
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: quantity,
          });
        }
      }
    }

    setCartData(tempData);
    console.log(tempData);
  }, [cartItems]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartData.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartData.map((item, index) => (
            <li key={index}>
              Product ID: {item._id}, Size: {item.size}, Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

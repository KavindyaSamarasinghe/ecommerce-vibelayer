import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';


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
    //console.log(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl, mb-3'>
      <Title text1={"YOUR"} text2={"CART"} />

      </div>

     
    </div>
  );
};

export default Cart;

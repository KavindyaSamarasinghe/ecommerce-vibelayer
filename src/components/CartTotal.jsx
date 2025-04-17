import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full bg-white p-6 rounded-2xl shadow-md border border-gray-200'>
      {/* Title Section */}
      <div className='mb-4 border-b pb-3'>
        <h2 className='text-xl font-semibold text-gray-800 tracking-wide'>
          <Title text1={"CART"} text2={"TOTAL"} />
        </h2>
      </div>

      {/* Pricing Details */}
      <div className='flex flex-col gap-3 text-sm text-gray-700'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-base font-semibold text-black'>
          <p>Total</p>
          <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

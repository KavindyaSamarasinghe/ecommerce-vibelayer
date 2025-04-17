import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  // Fixed the typo with the extra "4" after the useState declaration
  const [method, setMethod] = useState('cod');

  return (
    <div className='min-h-screen pt-10 px-4 sm:px-10 bg-gray-50'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
        {/* Left side - Delivery Information */}
        <div className='w-full md:w-1/2 space-y-4'>
          <div className='text-xl sm:text-2xl mb-4'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>

          <div className='flex gap-4'>
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Last name' />
          </div>

          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="email" placeholder='Email Address' />
          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Street' />

          <div className='flex gap-4'>
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='State' />
          </div>

          <div className='flex gap-4'>
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Zipcode' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Country' />
          </div>

          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Phone' />
        </div>

        {/* Right side - Cart Summary */}
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <div className='w-full max-w-md md:pt-32'>
            <CartTotal />
          </div>
          <div className='mt-12 w-full max-w-md'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />

            {/* Payment method options */}
            <div className='flex gap-3 flex-col mt-4'>
              <div 
                onClick={() => setMethod('stripe')} 
                className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400'
              >
                <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${method === 'stripe' ? 'border-green-500' : 'border-gray-300'}`}>
                  {method === 'stripe' && <div className='w-3 h-3 bg-green-500 rounded-full'></div>}
                </div>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
              </div>

              <div 
                onClick={() => setMethod('razorpay')} 
                className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400'
              >
                <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${method === 'razorpay' ? 'border-green-500' : 'border-gray-300'}`}>
                  {method === 'razorpay' && <div className='w-3 h-3 bg-green-500 rounded-full'></div>}
                </div>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
              </div>

              <div 
                onClick={() => setMethod('cod')} 
                className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded hover:border-gray-400'
              >
                <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${method === 'cod' ? 'border-green-500' : 'border-gray-300'}`}>
                  {method === 'cod' && <div className='w-3 h-3 bg-green-500 rounded-full'></div>}
                </div>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
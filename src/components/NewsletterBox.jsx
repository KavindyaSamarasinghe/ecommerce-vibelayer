import React from 'react';

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Subscribe to our newsletter and get the latest updates on our products and offers.
        </p>
        <form>
            <input className='w-full sm-flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
      
    </div>
  );
}

export default NewsletterBox;

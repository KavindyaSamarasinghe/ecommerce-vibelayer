import React from 'react';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Subscribe to our newsletter and get the latest updates on our products and offers.
      </p>
      <form onSubmit={onSubmitHandler} className='mt-4 flex flex-col sm:flex-row gap-2 justify-center items-center'>
        <input
          className='w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md outline-none'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-6 py-3 rounded-md'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;

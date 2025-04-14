import React from 'react';
import {assets} from '../assets/assets'; // Make sure to update this path

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="VibeLayer logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
          VibeLayer blends bold fashion with everyday comfort. Discover unique 
          styles, premium quality, and trendsetting layers made to express your 
          vibe—wherever life takes you.
          </p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li> 0773456789</li>
                <li>contact@vibelayer.com</li>
                </ul>

        </div>
      </div>
    </div>
  );
};

export default Footer;

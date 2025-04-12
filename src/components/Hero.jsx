import React from 'react';
import { assets } from '../assets/assets';

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
          </div>

          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>

          <div className='flex flex-col items-start gap-1 mt-3'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className='w-full sm:w-1/2'>
        <img className='w-full h-full object-cover max-h-[450px]' src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;

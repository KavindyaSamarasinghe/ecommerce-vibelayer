import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // ✅ Added Link
import { assets } from '../assets/assets.js';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>
      <img src={assets.logo} className='w-36' alt='logo' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='search' />

        <div className='relative group'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='profile' />

          {/* Dropdown */}
          <div className='absolute right-0 mt-3 w-36 bg-slate-100 rounded-md shadow-lg py-3 px-5 text-gray-500 hidden group-hover:block z-10'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

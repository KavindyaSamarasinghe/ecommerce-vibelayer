import React from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';


const Collection = () => {

  const { products } = React.useContext(ShopContext);

  console.log(products); // Use the variable, e.g., for debugging or rendering

  const [showFilter, setShowFilter] = React.useState(false);



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options */}
      <div className = 'min-w-60'>
      <p 
        className='my-2 text-xl flex items-center cursor-pointer gap-2' 
        onClick={() => setShowFilter(!showFilter)}
      >
        FILTERS
        <img 
  className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />

      </p>
      
      {/* Category filters */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${
      showFilter ? 'block' : 'hidden'
    } sm:block`}>
      <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Men'} />Men
        </p>

        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Women'} />Women
        </p>

        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Kids'} />Kids
        </p>

      </div>
    </div>

    {/* subcategiry filters */}

    <div className={`border border-gray-300 pl-5 py-3 my-5 ${
      showFilter ? 'block' : 'hidden'
    } sm:block`}>
      <p className='mb-3 text-sm font-medium'>TYPE</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Topwear'} />Topwear
        </p>

        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Bottomwear'} />Bottomwear
        </p>

        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Winterwear'} />wimterwear
          </p>

      </div>
    </div>



      </div>

      {/* Right side */}  
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'All'} text2={'COLLECTIONS'} />

          {/* product sort */}

          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>


        </div>

      
    </div>
    </div>
  );
}

export default Collection;


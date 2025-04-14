import React from 'react';
import { ShopContext } from '../context/ShopContext';

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

      </div>

      
    </div>
  );
}

export default Collection;


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
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}></div>

      </div>

      
    </div>
  );
}

export default Collection;


import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedCategories((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (selectedSubCategories.includes(value)) {
      setSelectedSubCategories((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedSubCategories((prev) => [...prev, value]);
    }
  };

  const applyFilters = () => {
    if (!products || products.length === 0) {
      setFilterProducts([]);
      return;
    }

    let filteredProducts = [...products];

    // Apply category filter if any categories are selected
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(item => 
        selectedCategories.includes(item.category)
      );
    }

    // Apply subcategory filter if any subcategories are selected
    if (selectedSubCategories.length > 0) {
      filteredProducts = filteredProducts.filter(item => 
        selectedSubCategories.includes(item.subCategory)
      );
    }

    setFilterProducts(filteredProducts);
  };

  // Initialize filtered products when component mounts
  useEffect(() => {
    if (products) {
      setFilterProducts(products);
    }
  }, [products]);

  // Apply filters whenever selected categories or subcategories change
  useEffect(() => {
    applyFilters();
  }, [selectedCategories, selectedSubCategories, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} checked={selectedCategories.includes('Men')} />Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} checked={selectedCategories.includes('Women')} />Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} checked={selectedCategories.includes('Kids')} />Kids
            </label>
          </div>
        </div>

        {/* Subcategory filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} checked={selectedSubCategories.includes('Topwear')} />Topwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} checked={selectedSubCategories.includes('Bottomwear')} />Bottomwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} checked={selectedSubCategories.includes('Winterwear')} />Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />

          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts && filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
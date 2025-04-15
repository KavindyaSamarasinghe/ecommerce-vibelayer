import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const applyFiltersAndSort = () => {
    if (!products || products.length === 0) {
      setFilterProducts([]);
      return;
    }

    // First apply search filter if search term exists
    let filteredProducts = [...products];
    
    if (search && search.trim() !== '') {
      const searchTerm = search.toLowerCase();
      filteredProducts = filteredProducts.filter(item => 
        item.name.toLowerCase().includes(searchTerm)
      );
    }

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

    // Then apply sorting
    let sortedProducts = [...filteredProducts];
    
    switch (sortOption) {
      case "low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedProducts.sort((a, b) => b.date - a.date);
        break;
      case "relevant":
      default:
        // For "relevant", we can prioritize bestsellers and then sort by date
        sortedProducts.sort((a, b) => {
          if (a.bestseller === b.bestseller) {
            return b.date - a.date; // Newer items first if bestseller status is the same
          }
          return a.bestseller ? -1 : 1; // Bestsellers first
        });
        break;
    }

    setFilterProducts(sortedProducts);
  };

  // Initialize filtered products when component mounts
  useEffect(() => {
    if (products) {
      setFilterProducts(products);
    }
  }, [products]);

  // Apply filters and sorting whenever selected categories, subcategories, sort option, or search changes
  useEffect(() => {
    applyFiltersAndSort();
  }, [selectedCategories, selectedSubCategories, sortOption, products, search]);

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
        <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />

          <select 
            className='border-2 border-gray-300 text-sm px-2 py-1'
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="newest">Sort by: Newest</option>
          </select>
        </div>

        {/* Search term display */}
        {search && search.trim() !== '' && (
          <div className="mb-4 text-sm text-gray-600">
            <p>Search results for: "{search}"</p>
          </div>
        )}

        {/* Status information about filters */}
        {(selectedCategories.length > 0 || selectedSubCategories.length > 0) && (
          <div className="mb-4 text-sm text-gray-600">
            <p>
              Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
              {selectedCategories.length > 0 && ` in ${selectedCategories.join(', ')}`}
              {selectedSubCategories.length > 0 && ` for ${selectedSubCategories.join(', ')}`}
            </p>
          </div>
        )}

        {filterProducts.length === 0 ? (
          <div className="flex justify-center items-center h-60 text-gray-500">
            <p>
              {search && search.trim() !== '' 
                ? `No products match your search for "${search}".` 
                : "No products match your selected filters."}
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
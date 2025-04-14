import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  
  // When search icon is clicked, show the search bar
  const handleSearchIconClick = () => {
    setShowSearch(true);
  };
  
  // When not showing search input, just display the search icon
  if (!showSearch) {
    return (
      <div className="py-3 px-4 text-right">
        <button 
          onClick={handleSearchIconClick}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          aria-label="Open search"
        >
          <img className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" src={assets.search_icon} alt="Search" />
        </button>
      </div>
    );
  }
  
  // When showing search, display the full search bar
  return (
    <div className="border-t border-b border-gray-200 bg-white shadow-sm py-4 text-center">
      <div className="relative inline-flex items-center justify-between border border-gray-300 px-4 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm hover:shadow transition-all duration-200">
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="flex-1 outline-none bg-inherit text-sm text-gray-700 placeholder-gray-400 mr-2" 
          type="text" 
          placeholder="Search products..." 
          aria-label="Search products"
          autoFocus
        />
        <img className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" src={assets.search_icon} alt="Search" />
      </div>
      <button 
        onClick={() => setShowSearch(false)}
        className="inline-flex items-center justify-center ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close search"
      >
        <img className="w-4 h-4" src={assets.cross_icon} alt="Close" />
      </button>
    </div>
  );
}

export default SearchBar;
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); // Changed from Products to products
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => { // Removed async as it's not needed
    products.forEach((item) => { // Changed map to forEach since we're not returning anything
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]); // Added products as dependency

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  src={item} 
                  key={index} 
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                  alt="" 
                  onClick={() => setImage(item)}
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'> {/* Fixed className syntax */}
            <img src={assets.star_icon} alt="" className="w-3.5" /> {/* Fixed class names */}
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p> {/* Fixed md:w syntax */}
          
          <div className='flex flex-col gap-4 my-8'>
            <p> Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p> {/* Fixed P to p */}
            <p>Cash on delivery is available on this product.</p> {/* Fixed P to p */}
            <p>Easy return and exchange policy within 7 days.</p> {/* Fixed P to p */}
          </div>
        </div>
      </div>
      
      {/* Description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Made from 100% breathable cotton, this stylish t-shirt offers a soft and 
            comfortable fit perfect for everyday wear. The fabric is lightweight and skin-friendly, 
            making it ideal for both warm and cool weather.
          </p>
          <p>Machine washable at 30°C. Do not bleach. Tumble dry on low heat or hang to dry for best results. 
            Iron on low if needed.
            Designed for durability and long-lasting color.
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
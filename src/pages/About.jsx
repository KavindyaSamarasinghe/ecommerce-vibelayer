import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At VibeLayer, we believe clothing transcends mere fabric—it's an expression 
          of identity and a layer of confidence worn daily. Founded in 2023, we create 
          versatile, quality apparel that enhances your personal style rather than defining 
          it. Our collections blend timeless essentials with contemporary designs, all ethically 
          produced with sustainable materials.</p>

        <p>VibeLayer isn't just about looking good—it's about feeling good in what you wear and 
          the impact your choices make. Our designers create pieces that withstand both trends 
          and daily wear, ensuring your wardrobe becomes more meaningful and less disposable. 
          When you feel good in what you wear, your confidence shines through—that's the ultimate 
          vibe we help you layer on.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>At VibeLayer, we create ethical, sustainable clothing that empowers individual expression. 
            We're committed to producing high-quality pieces that stand the test of time while minimizing 
            environmental impact. Our mission is to help you build a wardrobe that feels authentic to your 
            unique style and values.</p>
        </div>
      </div>
      
    </div>
  );
}

export default About;

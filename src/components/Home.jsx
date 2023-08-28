import React from "react";
import kitchen from "./../assets/kitchen.png";

const Home = () => {
  return (
    <div
      id='home'
      className='object-fill  w-[55%] sm:w-[48%] md:w-[40%] aspect-[65/84] mt-[80px] mx-auto relative z-0'
    >
      <img src={kitchen} className='w-full h-full' alt='img' />
      <h1 className='font-medium   lg:text-8xl absolute top-[40%] left-1/2 text-center translate-x-[-50%] text-white md:text-7xl text-3xl ss:text-4xl sm:text-5xl block min-w-[150%]'>
        Calculate What You Drink
      </h1>
    </div>
  );
};

export default Home;

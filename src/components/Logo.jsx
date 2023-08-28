import React from "react";
import { LiaCocktailSolid } from "react-icons/lia";

const Logo = ({ color }) => {
  return (
    <div className='flex items-center'>
      <LiaCocktailSolid
        className={`${
          color == "primary" ? "fill-primary" : "fill-white"
        } xs:w-10 xs:h-10 xs:mb-2.5 w-8 h-8 mb-2`}
      />
      <p className={`xs:text-4xl text-${color} text-3xl`}>DrinksCalc</p>
    </div>
  );
};

export default Logo;

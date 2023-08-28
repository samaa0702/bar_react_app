import React from "react";
import Logo from "./Logo";
import { links } from "./../constants/constants";

const Footer = () => {
  return (
    <footer className='mt-6 flex justify-between min-h-[200px] bg-black border-t-2 border-primary relative'>
      <Logo color='white' />
      <p className='text-white text-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        © DrinkCalc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

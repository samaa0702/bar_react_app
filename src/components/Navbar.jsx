import React, { useState } from "react";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <div className='flex justify-between my-3 mx-auto fixed top-0  w-full z-50 '>
      <Logo color='primary' />
      <NavMenu toggled={toggled} />
      <div
        className='w-9 h-9 object-contain md:hidden mr-6'
        onClick={() => setToggled((prev) => !prev)}
      >
        {toggled ? (
          <CiMenuFries className='fill-primary cursor-pointer w-7 h-7 mt-1.5 xs:mt-0 xs:w-9 xs:h-9' />
        ) : (
          <TfiClose className='fill-primary cursor-pointer w-6 h-6  mt-1.5 xs:mt-0 xs:w-8 xs:h-8' />
        )}
      </div>
    </div>
  );
};

export default Navbar;

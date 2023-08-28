import React from "react";
import spoon from "./../assets/spoon.svg";

const Heading = ({ title }) => {
  return (
    <>
      <h2 className='text-primary text-center text-3xl sm:mb-6 mb-5 ss:text-4xl md:text-5xl'>
        {title}
      </h2>
      <img
        src={spoon}
        alt='spoon'
        className='mx-auto sm:mb-9 sm:scale-150 mb-4'
      />
    </>
  );
};

export default Heading;

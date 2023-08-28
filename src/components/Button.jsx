import React from "react";

const Button = ({ rec }) => {
  return (
    <div className='mx-auto transition-all flex cursor-pointer w-[200px] h-[40px] p-[4px] bg-primary text-black justify-center items-center rounded-xl hover:shadow-inner hover:shadow-black active:shadow-none active:bg-black active:text-primary active:border-[1px] active:border-primary'>
      <p className='text-lg font-bold'>{rec ? "Recommend me" : "Cancel"}</p>
    </div>
  );
};

export default Button;

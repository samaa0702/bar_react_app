import React from "react";
import BarList from "./BarList";
import spirits from "./../assets/spirits.png";
import Heading from "./Heading";
import SearchItem from "./SearchItem";
import IngridientProvider from "../provider/IngridientProvider";

const BarCalc = () => {
  return (
    <IngridientProvider>
      <div id='ingredients' className='mt-40'>
        <Heading title='Assemble Your Bar' />
        <div className='flex mx-auto w-[80%] md:w-[70%]'>
          <img
            src={spirits}
            alt='spirits'
            className='w-full h-full rounded-3xl'
          />
        </div>
        <SearchItem itemPlaceholder='Search Ingredient' />
        <BarList />
      </div>
    </IngridientProvider>
  );
};

export default BarCalc;

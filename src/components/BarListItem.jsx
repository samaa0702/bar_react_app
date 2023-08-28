import React, { useState } from "react";
import BarIngredient from "./BarIngredient";
import { IoIosArrowDown } from "react-icons/io";

const BarListItem = ({ obj, noRounded }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li
      className={`p-2 rounded-xl border-primary bg-black min-w-[200px] mt-3 ${
        noRounded ? "border-none" : "border-[1px]"
      }`}
    >
      <h4 className='text-primary text-xl relative pl-6'>
        <IoIosArrowDown
          className={`w-5 h-5 fill-primary absolute top-1 left-0 cursor-pointer transition-transform duration-300 ${
            toggle ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setToggle((prev) => !prev)}
        />
        {obj.title}
      </h4>
      {toggle ? (
        <ul className='flex flex-col items-start pl-2'>
          {obj.structure.map((item) => {
            if (typeof item == "object") {
              return (
                <BarListItem key={item.title} obj={item} noRounded={true} />
              );
            } else {
              return <BarIngredient key={item} item={item} />;
            }
          })}
        </ul>
      ) : (
        <></>
      )}
    </li>
  );
};

export default BarListItem;

import React, { useContext, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BarContext } from "../provider/MyBarProvider";

const BarIngredient = ({ item, searched }) => {
  const { bar, setBar } = useContext(BarContext);
  const [added, setAdded] = useState(bar.includes(item));

  return (
    <li
      className={`${
        searched ? "pb-4" : "pb-0"
      } mt-4 text-white text-lg relative w-[120px]`}
    >
      {item}
      {!added ? (
        <IoMdAddCircleOutline
          className={`absolute h-6 w-6 top-0 right-[-35px] cursor-pointer hover:fill-green-500 transition-colors`}
          onClick={() => {
            if (!bar.includes(item)) {
              setBar((prev) => [...prev, item]);
              setAdded(() => true);
            }
          }}
        />
      ) : (
        <AiOutlineCheckCircle
          className={`absolute h-6 w-6 top-0 right-[-35px] fill-green-500`}
        />
      )}
      <MdOutlineRemoveCircleOutline
        className='absolute h-6 w-6 top-0 right-[-65px] cursor-pointer hover:fill-red-500 transition-colors'
        onClick={() => {
          setBar((prev) => prev.filter((elem) => elem != item));
          setAdded(() => false);
        }}
      />
    </li>
  );
};

export default BarIngredient;

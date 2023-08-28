import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";
import { IngredientContext } from "../provider/IngridientProvider";
import { ingredints } from "../constants/constants";
import BarIngredient from "./BarIngredient";

const toCap = (str) => {
  return str
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase() + element.substring(1))
    .join(" ");
};

const SearchItem = ({ itemPlaceholder }) => {
  const [ingredient, setIngredient] = useState("");
  const { name, setName } = useContext(IngredientContext);

  const ingredientFind = function (arr, str) {
    if (arr.includes(str)) setIngredient(str);
  };

  return (
    <>
      <form action='post' className='flex justify-center mt-8'>
        <div className='bg-black border-[1px] border-primary rounded-md relative px-9'>
          <input
            onKeyDown={(e) => e.code == "Enter" && e.preventDefault()}
            onChange={(e) => setName(toCap(e.target.value))}
            value={name}
            type='text'
            className=' bg-transparent p-2 min-w-[140px] placeholder:text-gray text-white rounded-md focus:outline-none'
            placeholder={itemPlaceholder}
          />
          <button>
            <IoIosSearch
              onClick={(e) => {
                e.preventDefault();
                ingredints.forEach((element) => {
                  typeof element.structure[0] == "string"
                    ? ingredientFind(element.structure, name)
                    : element.structure.forEach((elem) =>
                        ingredientFind(elem.structure, name)
                      );
                });
              }}
              className='w-7 h-7 fill-primary absolute top-1.5 left-1 hover:fill-white transition-colors'
            />
          </button>
          <button>
            <CiSquareRemove
              onClick={(e) => {
                e.preventDefault();
                setName("");
                setIngredient("");
              }}
              className='w-7 h-7 fill-primary absolute top-1.5 right-1 hover:fill-white transition-colors'
            />
          </button>
          {ingredient != "" && (
            <ul className='border-t-[1px] border-primary'>
              <BarIngredient item={ingredient} searched={true} />
            </ul>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchItem;

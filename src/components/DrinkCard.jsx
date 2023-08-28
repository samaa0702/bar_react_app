import React from "react";

const DrinkCard = ({ elem, i }) => {
  return (
    <>
      <div className='p-6 border-[1px] border-primary rounded-xl bg-black'>
        <p className='text-center text-primary text-2xl mb-4'>
          {elem.strDrink}
        </p>
        <div>
          <img
            src={`${elem.strDrinkThumb}`}
            alt='coctailPhoto'
            className='w-full rounded-md'
          />
        </div>
        <ul className='mt-3 list-image-glass ml-4'>
          {Object.entries(elem).map((item) => {
            if (item[0].search("strIngredient") != -1 && item[1] != null) {
              i++;
              return (
                <li key={`${elem.idDrink + item[0]}`} className='mb-3'>
                  <p className='text-white text-xl text-left'>
                    {elem["strIngredient" + `${i}`]}
                    <span className='text-xl text-gray-300 text-right ml-7'>
                      {elem["strMeasure" + `${i}`]}
                    </span>
                  </p>
                </li>
              );
            }
          })}
        </ul>
        <p className='text-xl text-primary mb-4 border-t border-primary pt-4'>
          {elem.strInstructions}
        </p>
      </div>
    </>
  );
};

export default DrinkCard;

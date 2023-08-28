import React, { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import { getRecipes } from "../services/recpe.service";
import Button from "./Button";
import { IoIosSearch } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";
import DrinkCard from "./DrinkCard";
import { BarContext } from "../provider/MyBarProvider";

const Recomendation = () => {
  const [cocktails, setCocktails] = useState([]);
  const [name, setName] = useState("");
  const [nameCocktail, setNameCocktail] = useState("");
  const { bar, setBar } = useContext(BarContext);
  const [recommend, setRecommend] = useState(true);
  const [drinksName, setDrinksName] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (nameCocktail != "") {
      const fetchDataName = async () => {
        const response = await getRecipes.getRecipesByName(nameCocktail);
        response != null && setCocktails(response);
      };

      fetchDataName();
    } else {
      setCocktails([]);
    }
  }, [nameCocktail]);

  useEffect(() => {
    if (recommend == false) {
      const fetchDataIngs = async () => {
        const response = await getRecipes.getRecipesByIng(bar);
        let collection = new Map();
        let arr = [];
        response.forEach((item) => {
          item.forEach((elem) => {
            elem = elem.strDrink;
            collection.set(elem, (collection.get(elem) || 0) + 1);
          });
          for (let entry of collection) {
            entry[1] >= response.length && arr.push(entry[0]);
          }
        });
        setDrinksName(arr);
      };

      fetchDataIngs();
    }
  }, [recommend]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchDataName = async (nameCocktail) => {
        const response = await getRecipes.getRecipesByName(nameCocktail);
        return response;
      };

      let result = await Promise.all(
        drinksName.map((item) => fetchDataName(item))
      );
      result = result.map((item) => item[0]);
      setDrinks(result);
    };

    fetchData();
  }, [drinksName]);

  console.log(drinks);

  return (
    <div id='recomendations' className=' mt-32'>
      <Heading title='Make Some Drinks' />
      <div
        onClick={() => {
          setRecommend((prev) => !prev);
          !recommend && setDrinks([]);
        }}
        className='max-w-[200px] m-auto'
      >
        <Button rec={recommend} />
      </div>
      <div className='grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-6 mt-6'>
        {drinks.map((elem) => {
          let i = 0;
          return <DrinkCard key={`${elem.idDrink}R`} elem={elem} i={i} />;
        })}
      </div>
      <form id='recipes' action='post' className='flex justify-center my-8'>
        <div className='bg-black border-[1px] border-primary rounded-md relative px-9'>
          <input
            onKeyDown={(e) => e.code == "Enter" && e.preventDefault()}
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            className=' bg-transparent p-2 min-w-[140px] placeholder:text-gray text-white rounded-md focus:outline-none'
            placeholder='Cocktail Name'
          />
          <button>
            <IoIosSearch
              onClick={(e) => {
                e.preventDefault();
                setNameCocktail(name);
              }}
              className='w-7 h-7 fill-primary absolute top-1.5 left-1 hover:fill-white transition-colors'
            />
          </button>
          <button>
            <CiSquareRemove
              onClick={(e) => {
                e.preventDefault();
                setNameCocktail("");
                setName("");
              }}
              className='w-7 h-7 fill-primary absolute top-1.5 right-1 hover:fill-white transition-colors'
            />
          </button>
        </div>
      </form>
      <div className='grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-6'>
        {cocktails.map((elem) => {
          let i = 0;
          return <DrinkCard key={elem.strDrimk} elem={elem} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Recomendation;

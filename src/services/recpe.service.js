import axios from "axios";

export const getRecipes = {
  async getRecipesByIng(arr) {
    let response = await arr.map(
      async (element) =>
        await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${element}`
        )
    );

    let result = await Promise.all(response);

    return result.map((elem) => elem.data.drinks);
  },

  async getRecipesByName(name) {
    let response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    return response.data.drinks;
  },
};

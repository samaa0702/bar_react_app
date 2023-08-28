import React, { createContext, useState } from "react";

export const IngredientContext = createContext();

const IngridientProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <IngredientContext.Provider value={{ name, setName }}>
      {children}
    </IngredientContext.Provider>
  );
};

export default IngridientProvider;

import React, { createContext, useState } from "react";

export const BarContext = createContext();

const MyBarProvider = ({ children }) => {
  const [bar, setBar] = useState([]);
  return (
    <BarContext.Provider value={{ bar, setBar }}>
      {children}
    </BarContext.Provider>
  );
};

export default MyBarProvider;

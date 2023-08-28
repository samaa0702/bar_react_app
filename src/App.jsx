import React from "react";
import {
  Navbar,
  Home,
  BarCalc,
  Recomendation,
  Weather,
  Footer,
} from "./components/appComponents";

const App = () => {
  return (
    <div className='wrapper w-full h-full bg-contain bg-repeat-y overflow-hidden font-cormorant'>
      <div className='bg-contain bg-black bg-opacity-50 w-full h-full px-6 pt-[60px]'>
        <Navbar />
        <Home />
        <BarCalc />
        <Recomendation />
        <Footer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { ingredints } from "../constants/constants";
import BarListItem from "./BarListItem";

const BarList = () => {
  return (
    <ul className='grid items-strech mt-10 grid-cols-1 self-auto sm:grid-cols-3 gap-x-4 gap-y-5'>
      {ingredints.map((item) => (
        <div className='' key={item.id}>
          <BarListItem obj={item} />
        </div>
      ))}
    </ul>
  );
};

export default BarList;

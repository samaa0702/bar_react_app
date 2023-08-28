import React from "react";
import { links } from "./../constants/constants";

const NavMenu = ({ toggled }) => {
  return (
    <nav
      className={`${
        !toggled ? "flex" : "hidden"
      } items-center z-50 flex-col absolute right-6 top-10 rounded-xl border-primary mr-6 border-2 backdrop-blur-sm p-4 md:mr-[100px] md:block md:static md:bg-transparent md:border-0`}
    >
      {links.map((nav, index) => (
        <a
          href={`#${nav.id}`}
          key={nav.id}
          className={`text-white text-lg md:text-xl ${
            index == links.length - 1 ? " mb-0 md:mr-0" : "mb-2 md:mr-6"
          } transition-colors hover:text-primary`}
        >
          {nav.title}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;

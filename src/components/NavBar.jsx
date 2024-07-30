import React from "react";

export const NavBar = () => {
  return (
    <nav className="fixed z-10 list-none w-full flex justify-center gap-10 py-3 cursor-pointer text-sm">
      <li className="hover:text-white"><a href=".Home">Home</a></li>
      <li className="hover:text-white"><a href="#Projects">Projects</a></li>
      <li className="hover:text-white"><a href="#Contact">Contact</a></li>
    </nav>
  );
};

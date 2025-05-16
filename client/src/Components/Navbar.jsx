import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "./Home";

const Navbar = () => {
  return (
    <nav className="bg-white h-16 flex items-center justify-between w-full border-b border-gray-200">
      <NavLink
        className="text-3xl font-bold cursor-pointer ml-10 flex items-center"
        to="/"
      >
        <span className="text-[#10A37F]">Secure</span>
        <span className="text-black">Share</span>
      </NavLink>
      <ul className="flex space-x-6 mr-10">
        <li className="cursor-pointer">
          <NavLink
            className="text-lg font-semibold transition-colors duration-300 hover:text-[#10A37F]"
            activeClassName="active-style"
            to="/"
            offset={-70}
            duration={500}
          >
            Home
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

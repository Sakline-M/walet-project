/* eslint-disable no-unused-vars */
import React from "react";
import { FaMapMarkerAlt, FaPlus, FaUser } from "react-icons/fa";
import logo from "../assets/raincash.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#BF40BF] text-white p-4 flex flex-wrap justify-between items-center z-50">
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <Link to={"/"} className="flex items-center">
          <img className="w-[40px] h-[60px]" src={logo} alt="RainCash Logo" />
          <span className="text-xl font-semibold ml-2">$RainCash</span>
        </Link>
        <div className="flex items-center ml-4 text-gray-300">
          <FaMapMarkerAlt className="text-lg mr-1" />
          <span className="text-sm">California, USA</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <button className="btn btn-ghost text-white flex items-center">
          <FaPlus className="mr-1" />
          Post
        </button>
        <Link to={"/account"}>
          <button className="btn btn-ghost text-white flex items-center">
            <FaUser className="mr-1" />
            Account
          </button>
        </Link>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-full md:w-64 text-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

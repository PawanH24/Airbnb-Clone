import React from "react";
import Image from "next/image";
import logo from "@/assets/airbnb_logo.png";
import { ChevronRight, CircleUserRound, Search } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=" h-16 flex items-center justify-between border-b border-gray-300 shadow-md ">
      <div className="flex items-center pl-5 text-rose-500 text-xl font-semibold">
        <Image height={35} width={35} src={logo} alt="logo" />
        <h1>airbnb</h1>
      </div>
      <div className="relative flex items-center w-full max-w-xs">
        <input
          type="text"
          className="w-full px-4 py-1 pr-10 flex border border-gray-300 rounded-xl justify-center shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
          placeholder="Search..."
        />
        <CiSearch className="absolute right-3 text-gray-500 text-xl" />
      </div>
      <div className=" flex bg-gray-200 rounded-xl h-14 items-center px-2 mr-3 hover:bg-gray-300 transition">
        <FaUserCircle size={35} />
        <div className="px-2">
          <p className="font-semibold text-sm">User Name</p>
          <p className="text-xs text-gray-400 ">Guest account</p>
        </div>

        <ChevronRight />
      </div>
    </div>
  );
};

export default NavBar;

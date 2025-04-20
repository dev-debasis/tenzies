import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function Navbar({ darkTheme, toggle }) {
  return (
    <div className="flex items-center justify-between h-20 px-20 py-10">
      <div className="flex gap-2">
        <img src="/favicon.png" alt="nav-logo" width="30px" />
        <h1 className="text-3xl font-bold text-[#6D28D9] dark:text-[#C4B5FD]">Tenzies</h1>
      </div>
      <div
        className="bg-[#F3F4F6] dark:bg-[#1F2937] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
        onClick={toggle}
      >
        {darkTheme ? (
          <MdOutlineWbSunny className="text-2xl text-[#FACC15]" />
        ) : (
          <IoMoonOutline className="text-2xl text-[#6D28D9]" />
        )}
      </div>
    </div>
  );
}

export default Navbar;

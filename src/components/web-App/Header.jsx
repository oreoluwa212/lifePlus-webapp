import React from "react";
import { user } from "../../assets";
import {
  PiMagnifyingGlassBold,
  PiMagnifyingGlassFill,
  PiMedalBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className=" lgss:w-full lgss:h-[100px] lgss:flex lgss:justify-between lgss:items-center lgss:pt-8">
      <div className="bg-[#F3E4E4] lgss:w-[70%] lgss:h-[80%] lgss:flex lgss:justify-between lgss:items-center lgss:px-4 rounded-[32px]">
        <PiMagnifyingGlassFill className="text-gold text-[28px] cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="lgss:w-full lgss:h-full lgss:mx-2 placeholder:px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent rounded-[32px"
        />
      </div>
      <div className=" lgss:w-[24%] lgss:px-4 lgss:h-[45%] lgss:flex lgss:justify-between lgss:items-center rounded-[32px]">
        <img src={user} alt="" />
        <button className="lgss:flex lgss:items-start lgss:flex-col lgss:justify-between lgss:gap-1 ">
          <h1 className="text-[20px] font-semibold">
            {currentUser.fullName}
          </h1>
          <div className="lgss:flex gap-2">
            <PiMedalBold className="text-gold text-[22px]" />
            <p className="text-[18px]">Bronze member</p>
          </div>
          <Link
            to={"/login"}
            className="text-gold text-[14px]"
            onClick={handleLogout}
          >
            <p>Log Out</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;

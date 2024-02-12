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
    <div className="w-full h-[100px] flex lgss:justify-between items-center lgss:pt-8">
      <div className="bg-[#F3E4E4] w-[50%] lgss:w-[70%] lgss:h-[80%] flex justify-between items-center px-4 rounded-[32px]">
        <PiMagnifyingGlassFill className="text-gold text-[35px] mds:text-[24px] cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="lgss:w-full lgss:h-full lgss:mx-2 placeholder:px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
        />
      </div>
      <div className=" w-[100%] lgss:w-[24%] px-4 h-[45%] flex justify-between items-center rounded-[32px]">
        <img src={user} alt="" />
        <button className="flex items-start flex-col justify-between gap-1 ">
          <h1 className="text-[16px] mds:text-[20px] font-semibold">
            {currentUser.fullName}
          </h1>
          <div className="flex gap-2">
            <PiMedalBold className="text-gold hidden mdss:flex text-[26px] mds:text-[22px]" />
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

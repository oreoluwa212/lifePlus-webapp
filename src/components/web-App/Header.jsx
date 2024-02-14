import React from "react";
import { user } from "../../assets";
import {
  PiMagnifyingGlassBold,
  PiMagnifyingGlassFill,
  PiMedalBold,
} from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ currentUser, setIsOpen,
isOpen }) => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="">
      <div className="w-full h-[100px] hidden lgss:flex lgss:justify-between items-center lgss:pt-8">
        <div className="bg-[#F3E4E4] w-[50%] lgss:w-[70%] lgss:h-[80%] flex justify-between items-center px-4 rounded-[32px]">
          <PiMagnifyingGlassFill className="text-gold text-[35px] mds:text-[24px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="lgss:w-full lgss:h-full lgss:mx-2 placeholder:px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
          />
        </div>

        <div className=" w-[100%] lgss:w-[24%] px-4 h-[45%] hidden lgss:flex justify-between items-center rounded-[32px]">
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
      <div className="flex lgss:hidden justify-between items-center h-[100px] w-full px-8">
        <div className="">
          <Link to={"/"}>
            <h1 className="text-black text-[36px] font-semibold">
              Life<span className="text-red">Plus</span>
            </h1>
          </Link>
        </div>
        <div className="">

        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className=" cursor-pointer text-red text-xl"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer text-red text-xl"
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;

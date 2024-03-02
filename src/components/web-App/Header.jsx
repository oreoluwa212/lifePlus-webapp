import React, { useState } from "react";
import { user } from "../../assets";
import { PiMagnifyingGlassFill, PiMedalBold } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownModal from "./DropdownModal";
import generateBlob from "./generateBlob";

const Header = ({ currentUser, setIsOpen, isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
  };
  const avatar = generateBlob(currentUser);
  return (
    <div className="">
      <div className="w-full h-[100px] hidden lgss:flex lgss:justify-between items-center lgss:pt-8 lgss:mb-10">
        <div className="bg-[#F3E4E4] w-[50%] lgss:w-[65%] lgss:h-[80%] flex justify-between items-center px-4 rounded-[32px]">
          <PiMagnifyingGlassFill className="text-gold text-[35px] mds:text-[24px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="lgss:w-full lgss:h-full lgss:mx-2 placeholder:px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
          />
        </div>

        <div className=" w-[100%] lgss:w-[30%] px-4 h-[45%] hidden lg:flex gap-6 items-center rounded-[32px]">
          {currentUser.avatar ? (
            <img
              src={avatar}
              alt="user Avatar"
              className="w-[50px] rounded-[50px]"
            />
          ) : (
            <img src={user} alt="" className="w-[50px]" />
          )}
          <button
            onClick={toggleDropdown}
            className="flex items-start flex-col justify-between gap-1 "
          >
            <h1 className="text-[16px] mds:text-[20px] font-semibold lgss:w-[180px]">
              {currentUser.fullName
                ? currentUser.fullName
                : currentUser.facilityName}
            </h1>
            <div className="flex gap-2">
              <PiMedalBold className="text-gold mdss:flex text-[26px] mds:text-[22px]" />
              <p className="text-[18px]">Bronze member</p>
            </div>
          </button>
          <DropdownModal
            isOpen={isDropdownOpen}
            handleClose={() => setIsDropdownOpen(false)}
            handleLogout={handleLogout}
            currentUser={currentUser}
          />
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

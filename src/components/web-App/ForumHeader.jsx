import React from "react";
import { PiMagnifyingGlassFill, PiMedalBold } from "react-icons/pi";
import { user } from "../../assets";
import { Link, useLocation } from "react-router-dom";

const ForumHeader = ({ currentUser }) => {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
  };
  const getTitleText = () => {
    switch (location.pathname) {
      case "/community":
        return "Community Forum";
      case "/learning":
        return "Learning Center";
      default:
        return "Community Forum"; // Default title
    }
  };
  return (
    <div className=" lgss:w-full lgss:h-[100px] lgss:flex  lgss:justify-between lgss:items-center lgss:pt-8">
      <div className="lgss:w-[70%] lgss:h-[80%] lgss:flex lgss:px-4">
        <h1 className="text-[34px] text-gold font-semibold">
          {getTitleText()}
        </h1>
      </div>
      <div className=" lgss:w-[24%] lgss:px-4 lgss:h-[45%] lgss:flex lgss:justify-between lgss:items-center rounded-[32px]">
        <img src={user} alt="" />
        <button className="lgss:flex lgss:items-start lgss:flex-col lgss:justify-between lgss:gap-1 ">
          <h1 className="text-[20px] font-semibold">{currentUser.fullName}</h1>
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

export default ForumHeader;

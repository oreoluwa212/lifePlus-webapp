import React from "react";
import { PiMedalBold } from "react-icons/pi";
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
      case "/dashboard/profile":
        return "Manage Profile";
      default:
        return "Community Forum";
    }
  };
  return (
    <div className="w-screen px-3 mds:w-full">
          <div className="w-full h-[100px] flex justify-between items-center pt-8">
      <div className="w-[100%] lgss:w-[70%] lgss:h-[80%] flex lgss:px-4">
        <h1 className="text-[28px] lgss:text-[34px] text-gold font-semibold">
          {getTitleText()}
        </h1>
      </div>
      <div className=" w-[100%] lgss:w-[20%] px-4 h-[45%] flex justify-between items-center rounded-[32px]">
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
    </div>
  );
};

export default ForumHeader;

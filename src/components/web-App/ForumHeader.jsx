import React from "react";
import { PiMedalBold } from "react-icons/pi";
import { user } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import generateBlob from "./generateBlob";

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
      case "/dashboard/points":
        return "Points";
      case "/dashboard/health-summary":
        return "Health Summary";
      case "/donations/history":
        return "Donation History";
      case "/dashboard/leader-board":
        return "Donor of The Month";
      default:
        return "Community Forum";
    }
  };

  const avatar = generateBlob(currentUser);
  return (
    <div className="w-screen px-3 mds:w-full">
      <div className="w-full h-[100px] flex justify-between items-center pt-8">
        <div className="w-[80%] lgss:w-[80%] lgss:h-[80%] flex lgss:px-4">
          <h1 className="text-[28px] lgss:text-[34px] text-gold font-semibold">
            {getTitleText()}
          </h1>
        </div>
        <div className=" lgss:w-[40%] w-[40%] px-4 h-[45%] flex justify-end gap-6 items-center rounded-[32px]">
          <img
            src={avatar}
            alt="user avatar"
            className="hidden mds:flex w-[50px] rounded-[50px]"
          />
          <button className="flex items-start flex-col justify-between gap-1 ">
            <h1 className="text-[16px] mds:text-[20px] font-semibold">
              {currentUser.fullName}
            </h1>
            <div className="flex gap-2">
              <PiMedalBold className="text-gold hidden mdss:flex text-[26px] mds:text-[22px]" />
              <p className="text-[14px] mds:text-[18px]">Bronze member</p>
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

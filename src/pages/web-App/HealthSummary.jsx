import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import {
    PiArrowLeftBold,
} from "react-icons/pi";

const HealthSummary = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="flex flex-row h-screen">
        <SideBar />
        <div className="  lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-1">
          <div className="flex justify-center items-center w-[100%]">
            <Link to={"/dashboard"}>
              <PiArrowLeftBold className="text-gold text-[32px] mt-6" />
            </Link>
            {loggedInUser && <ForumHeader currentUser={loggedInUser} />}
          </div>
          <div className="flex flex-col gap-8 px-6 mds:px-0 lgss:mt-9 mt-6">
            <h1 className="text-left text-[46px]">
              There are no records available.
            </h1>
            <h2 className="text-left text-[24px]">
              To view your health results you must first donate. Your results
              will automatically update after your donation has been processed.
            </h2>
            <h3 className="text-left text-[24px]">
              Having issues? Please contact customer support.
            </h3>
            <button
            type="submit"
            className="bg-red text-white text-[18px] border-none rounded-[32px] h-[50px] w-40 lgss:px-8 lgss:h-[48px] lgss:w-[30%] mt-4 lgss:mt-12 "
          >
            Donate Blood
          </button>
          </div>
        </div>
      </div>
    );
};

export default HealthSummary

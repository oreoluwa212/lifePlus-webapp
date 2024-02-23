import React from "react";
import SideBar from "../../components/web-App/SideBar";
import ForumHeader from "../../components/web-App/ForumHeader";
import { Link } from "react-router-dom";
import { PiArrowLeftBold, PiMagnifyingGlassFill } from "react-icons/pi";

const PastDonations = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" lgss:w-4/5 w-full h-full overflow-auto lgss:px-[4%] flex flex-col lgss:gap-1">
        <div className="flex justify-center items-center w-[100%]">
          <Link to={"/dashboard"}>
            <PiArrowLeftBold className="text-gold text-[32px] mt-6" />
          </Link>
          {loggedInUser && <ForumHeader currentUser={loggedInUser} />}
        </div>
        <div className="flex gap-9 mt-10 lgss:mt-4 px-[5%] mds:px-0 w-full">
          <div className="flex flex-col justify-between lgss:gap-5 lgss:items-center ">
              <div className="bg-[#F3E4E4] w-[60%] lgss:w-[600px] h-[48px] flex justify-between items-center px-4 rounded-[32px]">
                <PiMagnifyingGlassFill className="text-gold text-[35px] mds:text-[24px] cursor-pointer" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[80%] h-[48px] px-2 outline-none placeholder:text-gold placeholder:font-semibold placeholder:text-[18px] bg-transparent"
                />
              </div>
              <p>
                Collect your favorite rewards in one place. Start redeeming your
                rewards.
              </p>
            <button
              type="submit"
              className="h-[48px] lgss:mt-6 mt-4 mds:mt-0 w-[100%] mds:w-[70%] flex justify-center items-center bg-red text-white rounded-[32px] text-[1.2rem]"
            >
              Redeem Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastDonations;
